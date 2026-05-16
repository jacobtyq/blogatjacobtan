---
title: Converting an old JS project to TS
pubDate: 2022-09-07
description: ''
---

Having written my previous post on [using TypeScript](https://blog.jacobtan.co/use-typescript), I felt it was the opportune time to convert an old project to TS.

I decided on my [export Figma SVGs via CLI](https://github.com/jacobtyq/export-figma-svg) as my first JS-to-TS conversion. I built this about 2 years ago, and hastily shipped it out back then as:

1. I wanted to get it out as soon as possible (_build fast amirite_)
2. I didn't know the benefits of TS yet

## TL: DR

1. Install required dependencies
2. Create a tsconfig.json file
3. Rename '.js' to '.ts'
4. Update package.json entry point
5. Fix errors, typing, and refactor
6. Update tests and add jest.config (_optional_)

## Steps

Converting an old project from JS to TS is not as daunting as it seems. While obviously, my project is a small one compared to way bigger open source projects, the steps are pretty much similar. A [PR of the changes I have done to do this conversion](https://github.com/jacobtyq/export-figma-svg/pull/104/files) can be seen here.

### Install the required dependencies

For my project, these are ts-node, tsc, typescript, and ts-jest.

`ts-node` is the TS version of node, and allows you to execute TS files via `ts-node <filename>.ts`. tsc is the TS compiler (which comes included when you install typescript).

`ts-jest` is the jest transformer that allows jest to test our project after we have converted it to TS.

### Create a tsconfig.json file

`tsconfig` is a configuration file in the root of the TS project. It is used to tell the TS compiler how you want to compile your project.

### Rename '_.js' to '_.ts'

This is a straightforward step as it renames the file type of every file in the project from `.js` to `.ts`. If you have JSX files, you will need to rename them to `.tsx`.

### Update package.json

I needed to change the entry point of my project from `main.js` to `main.ts`.

### Fix errors, typing, and refactor

This was the most time-consuming part of the conversion process. As I was using ES6 in my tsconfig, I can now use modules. This meant doing this `import axios from 'axios'
` instead using require `const axios = require('axios')`

I also needed to start typing the arguments used by my functions.

Aside from that, I took the opportunity to refactor several parts of my project. One such refactor was to consolidate the constants used in the project into a single file.

### Update tests and add jest.config

A `jest.config` is also necessary as jest will use a preset to use the TS files. I also updated my tests.

### Challenges

To answer what a friend asked on twitter:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Any challenges u met?</p>&mdash; Estee Tey (@estee_tey) <a href="https://twitter.com/estee_tey/status/1566075572392173569?ref_src=twsrc%5Etfw">September 3, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

I do not think there were major ones that blocked me from completing this TS conversion. Rather, it was my inexperience in converting a project to TS that I felt was a barrier. I had read several guides to get a bird's eye view of what I needed to do.

I highly recommend you to start using typescript in your project(s) if you have yet to 😁
