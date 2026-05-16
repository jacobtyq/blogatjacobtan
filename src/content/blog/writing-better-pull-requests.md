---
title: Writing better Pull Requests
pubDate: 2020-04-23
description: ''
cover: /images/writing-better-pull-requests/lm0M5Ku74.jpeg
---

![Writing better Pull Requests](/images/writing-better-pull-requests/lm0M5Ku74.jpeg)

Code review is an essential part of software development. It sounds straightforward but in reality it's challenging and time consuming as it requires your team members to read, understand, evaluate, and then respond.

As a reviewer, you need to understand what the request is about. There is also figuring out why this request is necessary. What is the entry point of this code? Where does the reviewer start? It is also your responsibility to ensure that the code you approve upholds a certain quality before it is merged into master.

Fundamentally, reviewing pull requests is hard.

How then, can we make pull requests easier for reviewers to understand?

<iframe width="480" height="270" src="https://www.youtube.com/embed/rR4n-0KYeKQ?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>

Obviously a joke

### Explain what the issue is and why it is being done

Sometimes, providing a link to the JIRA ticket is not enough. Tickets could be incomplete, messy and full of noise, and information could be scattered in threads. The reviewer might not have enough context of what the issue is and this could adversely impact quality and response time.

A simple description like the following will get the point across:

> **\`As a*n *\***\*admin\*\***, I want to \***\*see the users’ last sign in date\*\***, so that \***\*I can better track usage of the app\*\***\`**

^ Refer to [Celebrating Small Wins; The importance of user stories](https://blog.jacobtan.co/celebrating-small-wins--the-importance-of-user-stories/)

### Where does it start and end

Where does the feature start and end in terms of logic? It may be obvious to you while developing, but for a reviewer, there is often no context.

Make it obvious for the reviewer. Clarify the scope of the pull request.

### How do you test the code

Make it easy for the reviewer to test your code. Provide descriptions on how to get the pull request working locally. Include a step-by-step guide on what to include if you have a new feature that integrates with backend, or if packages need to be installed.

If you have a test framework set up, include that in.

### Make it visual

For code that would interact with some form of presentation view, provide screenshots or a video capture. For example, a side by side diff of a style change, or video capture of the feature. A picture is worth a thousand words, so use that to help communicate.

I use the pre-installed Quicktime Player to screen record, followed by converting the video into gif using terminal. [A tutorial of it can be found here](https://gist.github.com/dergachev/4627207).  

### Use templates

Templates can help speed up the time needed to write a pull request. At work, we use a simple template similar to this.

    Description
    - Brief description on what this PR is about
    - Attach screenshots or anything valuable to the reviewer to give them context about your PR

    JIRA Tickets
    - Include tickets here

    Key Changes
    - Describe key changes

    How to test
    - Step 1 do this
    - Step 2 do that
    - Step 3 profit!

If you are using Github, [read more on creating a pull request template for your repository](https://help.github.com/en/github/building-a-strong-community/creating-a-pull-request-template-for-your-repository).

If you are working in a team for a product, communicate with team to find out if there is a particular way the team operates.

## Summary

There are many ways to improve your pull requests for a reviewer. The examples listed are just some of the ways and can serve as a guideline for your own.

I hope this would benefit you in crafting better pull requests and code review experiences.

How does your team handle code reviews and pull requests?
