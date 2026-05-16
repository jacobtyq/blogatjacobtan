---
title: How to switch between npm registries quickly
pubDate: 2021-04-28
description: ''
cover: /images/how-to-switch-between-npm-registries-quickly/_ccahNDNH.jpeg
---

![How to switch between npm registries quickly](/images/how-to-switch-between-npm-registries-quickly/_ccahNDNH.jpeg)

In the past, I manually typed in `npm set registry=<registry url here>` in terminal every time I needed to switch between registries. Sometimes I do not remember the registry URL so it adds to the frustration of having to remember yet another thing.

If you need to switch between different npm registries, here is an easier way to do it.

### Enter npmrc

With [npmrc](https://www.npmjs.com/package/npmrc), you can create profiles that you can easily switch between. Here is my setup:

    npmrc
    - work (Points to work npmjs registry)
    - home (Points to default npmjs registry)

You create a new `.npmrc` profile using the following.

    //I used npmrc -c home to create a home profile
    $ npmrc -c <profilename>

    //In my case, I created two profiles
    $ npmrc -c home
    $ npmrc -c work

After the profiles are created, you can switch between them using this command.

    $ npmrc <profilename>

    //In my case, to switch from work to home
    $ npmrc home

To point your profile to the registry you want.

    $ npm config set registry <registry url here>

![How to switch between npm registries quickly](/images/how-to-switch-between-npm-registries-quickly/IjXqjrmUY.gif)
