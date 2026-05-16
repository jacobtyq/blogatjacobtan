---
title: Extracting SVGs using Figma API
pubDate: 2020-07-21
description: ''
cover: /images/extracting-svgs-using-figma-api/V8_dGqwRe.jpeg
---

![Extracting SVGs using Figma API](/images/extracting-svgs-using-figma-api/V8_dGqwRe.jpeg)

Figma is an amazing collaborative tool that has been around for a while. One of the most interesting feature of Figma is being able to retrieve information of a file using the REST API that Figma provides.

At work, we recently started our transition from Sketch to Figma. As one of the maintainers of the company's design system, I wondered if we could leverage on Figma's API to automate extracting SVGs out from our design file.

### Existing Process

Our design system has a collection of icons that are being used throughout our projects. To share icons and assets, our workflow looks like this:

1.  Extracting the icon(s) from Sketch
2.  Running the icon(s) through SVGOMG (An SVG optimizer)
3.  Add the new icon(s) to our assets NPM package
4.  Do a Pull Request and wait for a review
5.  After review, merge to master
6.  Build process that publishes our package

While extracting icons is not difficult, it can get quite mundane and repetitive.

**Why not use existing exporting plugins instead?**

While there are plugins like [Advanced SVG Export](https://www.figma.com/community/plugin/782713260363070260/Advanced-SVG-Export) or [SVG Export](https://www.figma.com/community/plugin/814345141907543603/SVG-Export) , they require selecting on the icons that you want to export. This works if you have a small set of icons.

Our design system has a total of 103 icons, which will continue to grow over time.

**Figma API**

[Figma API](https://www.figma.com/developers/api) allows you to read Figma files and displays a JSON representation of a file. Within that JSON are layers of the file that are represented by nodes. Each element in Figma is a node, and each node would have properties associated to them.

To use the API, you would need a Personal Access Token that can be generated in `Account > Account Settings > Personal Access Token`.

![Extracting SVGs using Figma API](/images/extracting-svgs-using-figma-api/O9VppOOL0.png)

Using Figma in the browser, we can retrieve the `id` of an node by clicking on it. This will be displayed in the address bar with the `node_id`.

![Extracting SVGs using Figma API](/images/extracting-svgs-using-figma-api/IQg9HoP5E.png)

In this example, selecting the Icons frame gives me  `43%3A217` as the node_id, and when decoded using [decodedURIComponent](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent) gives us `43:217`.

    GET https://www.figma.com/file/<FIGMA_PROJECT_ID>/Test?node-id=43:217

Running the URL through Postman would give us a huge JSON data and we need to decide what to do with that data.

### Building the Plugin

The goal was for the plugin to retrieve all nodes and export them out as SVG. To achieve this requires traversing through our JSON to extract out the parts that we want. I also use NodeJS for this to be able to write out SVGs.

![Extracting SVGs using Figma API](/images/extracting-svgs-using-figma-api/WTLAHwF_8.png)

This has been cleaned up; the actual data is a lot messier

From the response, we see our icons in the children array. The plugin will loop through this array to extract out two values, `id` and `name` to be stored in a new array.

![Extracting SVGs using Figma API](/images/extracting-svgs-using-figma-api/izq6EoGYl.png)

With this new array, we loop through it to make a GET request for each icon.

    GET https://api.figma.com/v1/images/<FIGMA_PROJECT_ID>/?ids=<ID>&format=svg

To retrieve the flip flop icon, it would look similar to this request.

    GET https://api.figma.com/v1/images/<FIGMA_PROJECT_ID>/?ids=49:16&format=svg

This would give us the following response:

![Extracting SVGs using Figma API](/images/extracting-svgs-using-figma-api/B01D6gWVZ.png)

And opening that URL gives us our icon.

![Extracting SVGs using Figma API](/images/extracting-svgs-using-figma-api/TVhq9690a.png)

To get the SVG DOM of the icon, we do yet another GET request:

![Extracting SVGs using Figma API](/images/extracting-svgs-using-figma-api/JsAxiAWPR.png)

Which we can then write out as a SVG file using `fs.writeFile` function.

![Extracting SVGs using Figma API](/images/extracting-svgs-using-figma-api/5lYhbwcY_.png)

![Extracting SVGs using Figma API](/images/extracting-svgs-using-figma-api/TZIRBgtDj.gif)

Plugin in action

The [plugin is available in my repository](https://github.com/jacobtyq/export-figma-svg).

**Limitations**

There is one limitation which we cannot avoid or bypass. Figma API has a fixed number of request (rate limits) that you can call per minute. The plugin will process 20 requests per 45 seconds to avoid hitting that limit.

### What's next for the plugin?

Optimizing the SVGs through an optimizer (SVGO) or being able to detect duplicate names within Figma and dealing with that.
