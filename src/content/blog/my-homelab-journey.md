---
title: 'My Homelab Journey'
description: 'Diving into something that I could never financially recover from'
pubDate: 'May 15 2026'
tags: ['homelab', 'technology']
---

My homelab journey started back in 2015 when I built my first NAS.

I do not exactly remember what led to the decision to start building one, but from what I found in my photo archives, it was likely that I wanted to consolidate what I had in my external drives into a single NAS that was accessible within the network.

![The mess having 4 external USB HDDs](/images/my-homelab-journey/external-dock.jpg)

### The initial build (circa 2015)

Back then, Synology was the de-facto if you wanted an off-the-shelf NAS. They had plenty of offerings from 2-bays to 8-bays with the option to expand with their expansion bays. However, I didn't like that you would be stuck with using their OS (Synology DSM), and rely on hardware solutions tied to their ecosystem. Doing more research, I stumbled upon FreeNas (now TrueNas), which is an open-source OS that could turn any computer/server into a NAS. The cost-to-performance ratio of building your own NAS would be much better than an off-the-shelf solution.

![My first build](/images/my-homelab-journey/node-304.jpg)

I had a few constraints though; I needed it to be as inconspicuous as possible, as low powered as I could without sacrificing performance, and have some form of expandability. The inconspicuous part was to ward off questions like "What is that box in your room", and keeping it low-powered to quell my parents' questions again about electricity bills (It's a NAS after all! And leaving the drives spinning 24/7 keeps the drives from repeatedly spinning up and down), and "why are you wasting money on this". Ask any child of an Asian household and you know these questions are commonly asked.

The downside to having it small and, low-powered was the price. I remember spending about a grand on the server ITX motherboard with SoC, and 16GB of RAM, and another five hundred on the case, PSU, and eventually another 16GB of RAM. Funnily though, I ran out of budget for the hard drives, and resorted to hunting for used ones online on the eBay equivalent in Singapore, Carousell.

The build specs:

- Asrock Rack C2750D4i
- 32GB ECC RAM
- 6x WD Reds in RAIDZ2
- Fractal Design Node 304
- Noctua Fans (leftover from previous builds)

This setup actually did very well, with me only needing to replace the hard drives after detecting failures via SMART, and submitting one RMA on the motherboard due to the Intel Atom C2000 series bug. Power consumption was really good, with the server sipping 50&mdash;65W.

![Build in a network closet](/images/my-homelab-journey/node304-in-network-closet.jpg)

![From Node 304 to Ben Niu](/images/my-homelab-journey/node-304-to-benniu.jpg)

![Build with 10GbE](/images/my-homelab-journey/benniu-with-connectx.jpg)

I eventually did use the PCIe slot on the motherboard and installed a Mellanox ConnectX card for 10GbE, and shifted out to a slightly bigger computer case before the motherboard completely died in 2025.

In short, I had a good 10 year run with that first build.

![Build finally dead after 10 years](/images/my-homelab-journey/first-build-died.jpg)

### The second build (circa 2022)

The second build actually transpired when a friend offered to host a server at his place as he had spare server rack space. I wanted to experiment with remote syncing, and while doing research on what to buy, I realized that since I didn't need it to be inconspicuous or low-powered &mdash; I could buy used server racks. Plus, building another ITX would mean paying for a premium for smaller parts.

![The noisy server](/images/my-homelab-journey/r720xd.jpg)

I settled for a used Dell R720XD with a Xeon, and 6x HGST He12. This server was bulky and loud, a stark difference from my first build. It used at least twice the amount of power, and the fans spun angrily on boot until I tuned them down. I only used it as a remote backup, and eventually shifted it back home &mdash; with it sitting on an old G5 Mac.

![Mac supporting Linux](/images/my-homelab-journey/mac-supporting-linux.jpg)

Build specs:

- Xeon E5-2643
- 64GB ECC RAM
- 6x HGST He12

### The third build (circa 2024)

This build came about when I was residing in Japan. I couldn't bring my first two builds along for obvious reasons of space, and quickly realized that trying to rsync via SSH across a distance of 5,000km would result in slow latency. I also needed something that was really portable as garbage disposal rules in Japan were different from those in Singapore (I don't think I could simply throw it away).

After much research, I settled on a Lenovo ThinkCentre Tiny M720q which I managed to get for really cheap on Mercari (Japan's largest e-commerce marketplace app). This began my foray into Proxmox. I eventually upgraded the Tiny and it now has 32GB of RAM, 2TB of NVMe storage, and 128GB SSD for Proxmox OS. It's great, and I love how it's low power, low noise, low space, and comes with an internal PCIe slot which meant I could add a 10GbE card if I wanted to, or a graphics card.

![Lenovo ThinkCentre Tiny M720q](/images/my-homelab-journey/m720q.jpg)

Build specs:

- i5-8400T
- 32GB RAM
- 2TB NVMe Storage
- 128GB SSD

### The Great Consolidation (circa 2026)

![A StarTech Rack](/images/my-homelab-journey/startech.jpg)

With much persuasion, I convinced my parents that I needed a server rack, and finally had the network infrastructure (to be covered in a future post) to host my servers. So here we are after consolidating the builds. I also shifted the 6 drives from my first NAS into my Dell server, and purchased another ThinkCentre Tiny.

This wraps up the journey so far, and I will cover more about the services I run in the next parts.
