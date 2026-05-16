---
title: 'My Homelab Jouney'
description: 'Diving into something that I could never financially recover from'
pubDate: 'May 15 2026'
tags: ['homelab', 'technology']
---

My homelab journey started back in 2015 when I built my first NAS.

I do not exactly remember what led to the decision to start building one, but from what I could find in my photo archives, it was likely that I wanted to consolidate what I had in my external drives into a single NAS that was accessible within the network.

### The initial build (circa 2015)

Back then, Synology was the de-facto if you wanted an off-the-shelf NAS. They had plenty of offering from 2-bays to 8-bays with the option to expand with their expansion bays. However, I didn't like that you would be stuck with using their OS (Synology DSM), and rely on hardware solutions tied to their ecosystem. Doing more research, I stumbled upon Freenas (now Truenas), which is a open-source OS that could turn any computer/server into a NAS. The cost performance of building your own NAS would be much better than an off-the-shelf solution.

I had a few constraints though; I need it to be as inconspicuous as possible, as low powered as I could without sacrificing performance, and have some form of expandability. The inconspicuous part was to ward off my parents' questions of what that box in your room is, and having it as low powered to quell out again my parents' questions like "why you need it on running 24/7, it wastes electricity!" (It's a NAS after all! And leaving the drives spinning 24/7 is better for their longevity), and "why are you wasting money on this". Ask any child of an asian household and you know these questions are commonly asked.

The downside to having it small and, low powered was the price. I remember spending about a grand for the server ITX motherboard with SoC, and 16GB of RAM, and other five hundred for the case, PSU, and eventually another 16GB of RAM. Funnily though, I ran out of budget for the hard drives, and resorted to hunting for used 2nd hand ones online on our local ebay, Carousell.

![[IMG_5928.jpg]]

The build specs:

- Asrock Rack C2750D4i
- 32GB ECC RAM
- 6x WD Reds in RAIDZ2
- Fractal Design Node 304
- Noctua Fans (leftover from previous builds)

This setup actually did very well, with me only to replace the hard drives after detecting failures via SMART, and doing an RMA on the motherboard once due to the Intel Atom C2000 series bug. Power consumption was really good, with the server sipping 50 - 65w.

I eventually did use the PCIe slot on the motherboard and installed a Mellanox ConnectX card for 10GbE, and shifted out to a slightly bigger computer case before the motherboard completely died in 2025. In short, I had a good 10 year run with that first build.

### The second build (circa 2022)

The second build actually transpired when a friend offered to host a server at his place as he had spare server rack space. I wanted to experiment with remote syncing, and while doing research on what to buy, I realized that since I didn't need it to be inconspicuous or low powered I could get used server racks. Plus, learning from experience, building another ITX would mean paying for a premium for smaller parts.

I settled for a used Dell R720XD with a Xeon, and 6x HGST He12. This server was bulky and loud, a stark difference from my first build. It used minimally twice the amount of power, and the fans spun angrily until I tuned it down to a good 25%. I eventually only used it as a remote backup, and shifted it back home (with it sitting on an old G5 Mac).

Build specs:

- Xeon E5-2643
- 64GB ECC RAM
- 6x HGST He12

### The third build (circa 2024)

This build came about when I was residing in Japan. I couldn't bring my first two builds along for obvious space reasons, and quickly realized that trying to rsync via SSH across a distance of 5,000km would result in slow latency. I also needed something that was really portable as garbage disposal rules in Japan was different from Singapore (I don't think I could just throw it away), and I could bring it along with me if I ever needed to shift.

After much research, I settled on a Lenovo ThinkCentre Tiny which I managed to get for really cheap on Mercari. This began my foray into the Proxmox. I eventually upgraded the Tiny and it now has 32GB of RAM, 2TB of NVMe storage, and 128GB SSD for Proxmox OS. It's great, and I love how it's low power, low noise, low space, and come with an internal PCIe slot which meant I could add a 10GbE card if I wanted to, or a graphic card.

Build specs:

- i5-8400T
- 32GB RAM
- 2TB NVMe Storage
- 128GB SSD

### The Great Consolidation (circa 2026)

With much persuasion, I convinced my parents that I needed a server rack, and finally had the network infrastructure (To be covered in a future post) to host my servers. So here we are with the great consolidation. I also shifted the 6 drives from my first NAS into my Dell server, and purchased another ThinkCentre Tiny.

This wraps up the journey so far, and I will cover more about the services I run in the next parts.
