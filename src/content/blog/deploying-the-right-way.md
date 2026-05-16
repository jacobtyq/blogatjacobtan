---
title: 'Deploying the right way?'
pubDate: 2019-05-05
description: ''
cover: /images/deploying-the-right-way/kNvRscPvk.jpeg
---

![Deploying the right way?](/images/deploying-the-right-way/kNvRscPvk.jpeg)

When I first started doing web development, the only way I knew how to get code from a local computer to a web server was to drag and drop it via FTP.

I didn't know how to use git, or any form of version control system to handle my project. I only knew that it allowed me to get my code online.

Forward to present day, armed with a lot more experience and understanding how to deploy, a question that has been stuck in my head; is there a 'right' way to deploy?

Sure in a perfect world when there are no consequences in spending more time than necessary to get a \`perfect\` deployment, but when you have other commitments in life, I would think it would be more accurate to ask yourself if it is worth the time to make it efficient.

![Deploying the right way?](/images/deploying-the-right-way/7WC3BiON1.png)

Source: https://xkcd.com/1205/

At work, we go all out to be as efficient as we can to reduce overheads and mistakes by using CI tools like Jenkins and CD tools. Working on actual products that are being used live, any form of downtime will bring major impact on our users.

Being in a team, these tools help by reducing the mistakes that one might potentially make if doing deployment manually, and to prevent any catastrophic downtime or inconveniences.

Outside of work however, I am more lenient on deployment process. While it is important to have some form of deployment process, I find that it is also equally important to know that you could be putting too much focus on your deployment process at the start, and end up not shipping your project.

### The tech stack

Also, your deployment process could vary depending on your tech stack.

A static site might not require being \`built\` unlike a node JS or a Rails app. If you are only deploying to your static site every couple of months of so, a CD tool might not be necessary. If your application is complex enough, you could push your code onto your repository, and have a post hook to Heroku for it to do your builds for you, before deploying it.

I guess the point I'm getting is.. there is no one right way to deploy.

Only you know what works best for you.

Edit: Some friends have asked why don't I use Netlify?

Netlify is great for small side projects or throwaway projects where I just want to get it deployed as fast as possible. For large projects, I would prefer not having a 3rd party tool build for me for security purposes.
