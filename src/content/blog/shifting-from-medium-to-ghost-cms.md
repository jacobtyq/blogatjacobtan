---
title: Shifting from Medium to Ghost CMS
pubDate: 2019-03-04
description: ''
cover: /images/shifting-from-medium-to-ghost-cms/odEA2ucTh.jpeg
---

**TL;DR, I have shifted from Medium to my own self-hosted Ghost CMS**

If you are reading this post, you might have noticed that the URL has changed, and yes we are on a self-hosted version of Ghost CMS.

![Shifting from Medium to Ghost CMS](/images/shifting-from-medium-to-ghost-cms/DVbGO9Twj.jpeg)

## The Big Why

Perhaps the biggest question was why shift? Why shift from one of the largest publishing platforms in the world to a self-hosted platform? And pay extra cost at that?

There are many reasons to shift from Medium, and I have mine as well. I was initially attracted by Medium's own partner program, aptly named Medium Partner Program.

It allowed me to earn some side monies while writing, in exchange for locking my content down behind their paywall. It also promised higher engagement of readers to the stories you have written, which was a plus point.

But I wasn't satisfied with publishing on Medium in exchange for some monies and bringing them sign-ups to their platform. I wanted a little corner on the web I can call my own.

### So why did I choose Ghost instead other CMS? And why not \*insert popular\* static site generator?

I basically didn't want to deal with the trouble of writing stuff in markdown, and then compiling it. I didn't want to have to read up on another documentation to figure out how the generator works. I didn't want to deal with having to set up a deployment process. I know I can use Netlify to deploy. But everyone has their own way of deciding how things work for them, and I didn't want the static site generator way.

You see, when I want to jot down or write an article, I want to do that and not have to look up [Markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) and figure out how to get quotes working nicely. It distracts me from writing.

And why not other CMS? The funny thing is, when I first started out writing, I knew I didn't want to use Wordpress (due to bloat and other stuff), and I happen to chance upon Ghost a couple of years back. I fell in love with their simplicity and perhaps the biggest reason, it allows me to just write.

It allows me to not think about the other stuff, not having to worry about optimizing images, dealing with performance issues etc. Those can be dealt with when I am in the zone to develop. But when I am in the zone to share an idea or content, **I just want to get it out.**

I also wanted to develop my own brand, instead of having it on someone else's platform. By self-hosting, **I can control what I write, and what I want to do with the content** 😎

## Technicalities

For those wondering how I self-hosted Ghost. I am using DigitalOcean and used their one-click apps tool to spin the installation up, SSH in to finish the setup and viola!

![Shifting from Medium to Ghost CMS](/images/shifting-from-medium-to-ghost-cms/Pnal75KHX.png)

DigitalOcean's One-click apps

I did want to use my existing droplet to host Ghost within a sub-directory, but kept hitting a redirect issue and had to run it with Apache (instead of Nginx which Ghost prefers). I didn't want to waste time trying to troubleshoot it when I can push more content 🚀

To transfer my existing content from Medium, I used a nifty tool called [Medium to Ghost](https://github.com/ageitgey/medium_to_ghost). The instructions are all at the Github page and I did have problems getting it set up initially but [sorted it out](https://github.com/ageitgey/medium_to_ghost/issues/5).

Also, if you like to help support this blog's hosting. I have a [referral link for DigitalOcean](https://m.do.co/c/f1805ea371bc) which gets you free $25 credits (that's 5 months worth of hosting on the cheapest plan), or you can support me on [buymeacoffee](https://www.buymeacoffee.com/jacobtyq) 🙏

To end off, I really like this quote from Sara Soueidan.

> I’m so happy to see more personal blogs are being made and/or refreshed recently. ✨
>
> Even if you prefer publishing on Medium, I’d encourage you to have a blog, publish there and syndicate elsewhere. If you like, you know. It’s pretty great to have your own corner of the Web.— Sara Soueidan (@SaraSoueidan) [February 8, 2019](https://twitter.com/SaraSoueidan/status/1093780400365813760?ref_src=twsrc%5Etfw)

I want to write to share, I want to write to contribute back to the community. I want to open up doors of opportunity. And one day when I look back, I want to be proud of being able to help someone through these articles.
