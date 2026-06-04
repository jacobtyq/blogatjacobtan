---
title: 'Migrating from Hashnode to Astro'
pubDate: 'June 02 2026'
tags: ['blog', 'technology']
description: "Hashnode quietly removed free Graph API access. Here's how I scrambled to migrate my blog to Astro."
---

I have been writing since 2014, and have shifted across multiple platforms.

As far as I could remember, I started my writing journey hosting on my own website → shifting to Medium → [shifting to Ghost](blog/shifting-from-medium-to-ghost-cms/) → shifting to Hashnode → shifting to Astro.

The biggest question remains: Why shift from Hashnode to Astro?

#### The Shift

When I wanted to write about [my homelab journey](blog/my-homelab-journey/), I realized Hashnode had quietly removed their free access to Graph API, which I was using to display my posts on my site. Also, I came across [posts](https://www.reddit.com/r/hashnode/comments/1lvp6bt/it_might_be_time_to_migrate_your_Hashnode_blog/) the Hashnode subreddit with mentions that it was probably best to migrate from Hashnode due to dwindling support and features being deprecated. This led me to quickly scramble for a new solution, hopefully a more permanent one.

I previously used Astro during a [pair programming with miccheng](https://github.com/miccheng/astro-tutorial), and liked that it gives you multiple options for templating (not just JSX). Also, it has some [pretty good guided examples](https://docs.astro.build/en/recipes/) on adding features to your Astro project. Finally, I could have it deploy on GitHub pages instead of a Digitalocean droplet.

As a sidenote, I had previously drafted a post on my switch from Ghost to Hashnode, and for reasons unknown I never completed writing about it.

![Image of a draft switching from Ghost to Hashnode](/images/hashnode-to-astro/ghost-to-hashnode-draft.png)

#### Migration

My Hashnode posts were stored on a private GitHub repository, and the posts were already in markdown, which meant there was no need to convert between formats.

![Image of post with missing frontmatter](/images/hashnode-to-astro/missing-frontmatter.png)

However, I couldn't use the markdown as they were. The markdown file names were hashed with Hashnode IDs, had missing frontmatter, and the images in each post were pointed to Hashnode's CDN.

To solve this, I consulted with everyone's favourite AI tool, Claude, and had it generate a migration script that would extract content from the repository, add the appropriate frontmatter, rename the markdown files with the correct names (e.g. `cl7r0effm04p71fnveubsgjo2.md` → `Converting an old JS project to TS`), and download the images into the correct folders for each post.

![Screenshot of Migration script running](/images/hashnode-to-astro/thanks-claude.png)

With Astro, I could also introduce features that I want. One of which is a blurbs content collection that lets me to write quick blurbs that do not fit in the long form format of a blog post. The other being a dark mode switcher, which I can customise to my own liking. I could also add in Playwright for E2E testing when a new feature is introduced.

![Image of post with appropriate frontmatter](/images/hashnode-to-astro/with-frontmatter.png)

I have plans to add in more features to this Astro site, with i18n being the next likely candidate.

Twelve years and multiple platforms later, I think Astro might finally be the one I stick with. If you're on Hashnode and are considering moving, the migration is fairly straightforward as long as your posts are already in a Github repository.
