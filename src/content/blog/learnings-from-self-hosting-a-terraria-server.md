---
title: Learnings from self-hosting a Terraria server
pubDate: 2020-06-23
description: ''
cover: /images/learnings-from-self-hosting-a-terraria-server/4CQ1eHO-A.jpeg
---

![Learnings from self-hosting a Terraria server](/images/learnings-from-self-hosting-a-terraria-server/4CQ1eHO-A.jpeg)

Terraria is a 2D sandbox game with gameplay that revolves around exploration, building, crafting, combat, and mining, playable in both single-player and multiplayer modes.

About a month ago, it released the last ever update to the game. With that release comes master mode, the hardest difficulty mode in the game. My friends and I wanted to tackle master mode together, and with that we embarked on this crazy journey self-hosting a Terraria server.

There are two types of multiplayer environments, `Host & Play` and `Server`. With `Host & Play`, you host the game locally, and with `Server` you host it remotely.

### **Initial Days & Problems**

We started off with `Host & Play` and quickly realized that there were two major issues.

1.  The host would need enough CPU and RAM to host and play the game without other players lagging.
2.  The host has to be the last to leave and the first to join.

In Terraria, lagging during combat is a no-go especially during boss fights which is necessary for progression. These fights require speed and agility, and addition to that each boss requires a specially crafted item that has ingredients that are difficult to obtain to be summoned. As such, reducing lag was a top priority.

We also wanted to play the game on our own time without having to wait for the host to set the game up.

From an engineering perspective, I wanted to find out if I could self-host the server to resolve the two issues.

## **The Three Solutions**

Before we self-host, I need to see what we need.

Googling  `Terraria Server Requirements` yielded mixed results, and the [documentation from Gamepedia](https://terraria.gamepedia.com/Server) was not providing much information about the requirements for self-hosting.

After looking around further, I found that you'd generally need a server with 2 GB of RAM for a large-sized world. Smaller world sizes could go with less RAM. For the CPU, there have been accounts of people successfully running Terraria on a low-powered Raspberry Pi 2.

I have a Freenas server at home that runs on a Intel Atom Octa-core, which should be sufficient.

### **Self-hosting on my own server**

I spun up a Virtual Machine, dedicating 2 CPU cores and 2 GB of RAM and ran Ubuntu 20.04 LTS. While it worked initially, lag issues surfaced whenever three or more players were connected to the server.

The CPU usage kept spiking during boss fights, which was something beyond my control, and players would randomly disconnect before the server saved, causing them to lose items in their inventory which are stored client-side.

I needed a better solution.

![Learnings from self-hosting a Terraria server](/images/learnings-from-self-hosting-a-terraria-server/etgp6Hs59.jpeg)

I also encountered a weird glitch where my character fell all the way down into the depths of hell.

### **Hosting on DigitalOcean**

Hosting on DigitalOcean was a breeze, I spun up a droplet with 2 virtual CPUs and 2 GB of RAM, `wget` the required files and got it running in no time.

However, there was one issue; running any droplets on a cloud infrastructure provider was costly. For our droplet it would have cost me 15 USD per month. This was a temporary solution at best, and we were on DigitalOcean for a week before we went with our final solution.

### **Hosting on a Raspberry Pi 4**

For this project, I used Raspbian OS. After booting up my Pi4 and enabling SSH through the Raspberry Pi Configuration, I left it in my network closet and continued the rest of the configuration remotely.

![Learnings from self-hosting a Terraria server](/images/learnings-from-self-hosting-a-terraria-server/ltYXKyrIz.jpeg)

My Raspberry Pi 4 with heatsinks and a cooling fan

I used the same setup instructions I did for the first two solutions, however as Raspbian does not come with a prebuilt executable and architecturally different from Windows (this is a ARM machine), I needed to use `mono` to run the executable server file instead.

    mono --server --gc=sgen -O=all ./TerrariaServer.exe

This will start TerrariaServer and you can then configure the server from there.

I also installed `htop`, an interactive process viewer to monitor both CPU and RAM usage.

It is also possible to start the server with a configuration file, which would have been the ideal but I cannot seem to get the server to use the password set in the file.

### Monitoring the Server

To monitor the server, I `ssh` into the Pi first, followed by running tmux to open two terminal sessions; one for TerrariaServer and the other for `htop`.

![Learnings from self-hosting a Terraria server](/images/learnings-from-self-hosting-a-terraria-server/UE72XiuAQf.png)

The Pi solution worked the best and most of our lag issues were resolved 😄

### **Setting up Firewall and Port Forwarding**

In addition, I enabled firewall and allowed only SSH and Terraria's ports. This can be done with this command:

    enable ufw

And followed by allowing only SSH and Terraria with the following command:

    ufw allow 22 //For SSH
    ufw allow 7777 //Default Terraria Port

I also forwarded port 7777 on my router to allow players outside of my home network in.

![Learnings from self-hosting a Terraria server](/images/learnings-from-self-hosting-a-terraria-server/5H1frQWc8.png)

In our relic room with relics from all the bosses in the game

### Backing up our save game

With the game running, I needed to figure out how to backup our save game in the event the Pi dies so that we are able to get back up and running quickly.

By default, TerrariaServer will auto-save the world file every 10 minutes only when players are connected, and hibernates if no one is online.

I wrote a bash script to rsync from the save directory in the Pi to a Dropbox folder on my Macbook, and a cron to trigger that rsync every 10 minutes. I did not want to have Dropbox running on my Pi.

**My Rsync script:**

    rsync -chavzP --stats <username>@<ip-to-pi>:~/.local/share/Terraria/Worlds/ /Users/jacob/Dropbox/Terraria/Worlds --log-file=terraria-rsync.log

Since the server will only auto-save when players are connected, `rsync` would work here a lot better than `cp` for synchronising only when there are changes to the file.

**My cron script:**

    */10 * * * * ./scripts/save_terraria_to_dropbox.sh > ~/scripts/cron.log 2>&1

As mentioned earlier, my cronjob runs every 10 minutes to trigger the bash script.

## What's next?

Self-hosting a server gave me much insight on stuff I have not tried before. I might try self-hosting a Factorio server next, or perhaps retro game emulation.
