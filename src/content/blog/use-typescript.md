---
title: Use TypeScript
pubDate: 2022-08-28
description: ''
---

Recently, I tweeted this.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Starting to see the benefits of ts</p>&mdash; Jacob Tan (@jacobtyq) <a href="https://twitter.com/jacobtyq/status/1563086184045486081?ref_src=twsrc%5Etfw">August 26, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

And friends on twitter started pouring in praises for the strongly typed language, with one saying "Once you taste TS, you never go back". I agree, it's like a popular beverage, best enjoyed in the purest form.

Another asked "What are the benefits that I am appreciating now. Was it previously unknown? Or previously underrated? Would it have helped your previous env or applies to current env?"

This post is to answer that very question.

### Past experience

I have experienced TypeScript before, back in a previous project [Jobsgowhere](https://github.com/jobsgowhere/jobsgowhere). I was my first time experiencing this new tool, and there were a lot of questions in my head. For example, why do we need to set up types / interfaces? Why do we need to know the shape of the values beforehand? What is this generic?

Coming from the dynamic wild west of JavaScript, it felt cumbersome. I was used to building functions and components that didn't require checking.

## Why Typescript now?

To be fair, it wasn't a choice I made to switch to TypeScript. My team had grown and we have another developer to help with the project I'm working on. They suggested we migrate to TypeScript and I knew it's now or never.

When the project first started, I wanted to implement TypeScript. Given I wasn't confident that I would be able to build at a comfortable pace if we were to use Typescript (a.k.a not get fired) as I was only FE developer then, I shelved the idea.

### Seeing the benefits

I started to see TypeScript benefits when I was building a new component. It was a simple component used to display a rank and it looked like this.

![Rank](/images/use-typescript/ZK0At0Smh.png)

This takes in a number (e.g. 3) and displays it as `#3` with the appropriate styles. Simple right?

I looked at the Figma file and realised I needed to add a zero to the rank if it was less than 10 (e.g. `#03`). Ok, let's fix that.

![New Rank](/images/use-typescript/AFCCr8V7L.png)

This is when VSCode hits me with this error

![Pad Start](/images/use-typescript/GQFrOfQYz.png)

And it was at this moment, I saw the benefits. I knew why we had to declare a type. If it was in JavaScript land, I would not have known what or why it was wrong.

With TypeScript, I knew exactly how to fix it and why there were errors

1. We need to convert `newRank` into either a string or a number type
2. Because `padStart()` is a String method
3. And if the rank is > 10, it would remain as a number type

![Fixed](/images/use-typescript/JpFq3BILa.png)

I was convinced.

To answer the question posted by my friend; Would I go back and tell my past self to use TypeScript? Definitely. Would I have tried to convince him to switch to TypeScript earlier? For sure.

However, I needed that magically moment in time where everything clicked, and that was something that couldn't be rushed.

I am still relevantly new to the world of TypeScript, and I hope it will get better.
