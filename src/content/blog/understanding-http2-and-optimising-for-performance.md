---
title: Understanding HTTP/2 and optimising for performance
pubDate: 2018-04-02
description: ''
cover: /images/understanding-http2-and-optimising-for-performance/IOJimN-0h.png
---

![Understanding HTTP/2 and optimising for performance](/images/understanding-http2-and-optimising-for-performance/IOJimN-0h.png)

HTTP/2 is the first major revision of HTTP (Hypertext Transfer Protocol), and very foundation of communication on the world wide web.

It is backward compatible with HTTPS/1.1, so it works with browsers that do not support HTTP/2. The protocol itself is transparent to end users, and you would not notice it unless you inspect the dev console of the page you are on.

![Understanding HTTP/2 and optimising for performance](/images/understanding-http2-and-optimising-for-performance/mEy1edJJg.png)

HTTP/2 is supported on all browsers except Opera Mini and UC Browser for Andriod.

### What’s new in HTTP/2?

- Binary instead of textual
- Fully Multiplexed requests (🚀🚀🚀)
- One connection instead of multiple
- Flow control and prioritisation of multiplexed streams
- Uses HPACK, a header specific compression to reduce overhead
- Server Push
- Optimisation techniques used in HTTPS/1.1 like domain sharding and asset concatenation no longer applicable, or need to be reworked

### Why Binary?

HTTPS/1.1 is a text-based protocol, with affordances such as whitespace, and new line to make it readable for us humans. These affordances are a trade-off as even though useful to us, isn’t too useful to a computer as it is difficult to be broken down while still being readable.

HTTP/2 uses binary to break down the HTTP protocol into chunks of frames, which can be multiplexed within a single connection.

### Multiplexed Requests, Flow Control and Stream Prioritisation

![Understanding HTTP/2 and optimising for performance](/images/understanding-http2-and-optimising-for-performance/NizH7IN5p.png)

Site on HTTPS/1.1

In HTTPS/1.1, it’s common to see waterfall of ‘blocked’ requests (The grey lines), and when you hover over a request, you’ll see that it has been stalled. This has led to [optimisation techniques](https://medium.com/@jacobtan/tackling-front-end-performance-strategy-tools-and-techniques-12ca542052e7) such as minification, critical css etc.

![Understanding HTTP/2 and optimising for performance](/images/understanding-http2-and-optimising-for-performance/6YaxmNnIq.png)

Stalled requests in HTTP/1.1

HTTP/2 tackles this with multiplexing, in which multiple HTTP streams (Streams are the equivalent to requests in HTTPS/1.1) are sent and responses can be received asynchronously via a **single TCP connection**.

![Understanding HTTP/2 and optimising for performance](/images/understanding-http2-and-optimising-for-performance/14NmTPnzX.png)

Site with HTTP/2 enabled

This makes the site load a lot faster, as the requests can be sent without waiting for blocked requests to finish.

### Stream Prioritisation

Since HTTP/2 denotes that requests have to be sent over a single connection, how does it know what is more important than the other?

Prioritisation comes in by indicating the more important streams to be allowed to move on first. This is similar to being on a highway when an ambulance sounds it’s siren, indicating it’s responding to an emergency, and will need to move first.

### What is HPACK?

Back in the world of HTTPS/1.1, the header fields for requests are not compressed. As web pages grow in an exponential rate, the header fields are repeated over and over again per request. Since many headers are repetitive, they are seen as redundant while consuming bandwidth.

![Understanding HTTP/2 and optimising for performance](/images/understanding-http2-and-optimising-for-performance/ro-IiaPCL.png)

Request headers in HTTP/2 are all in lowercase

HPACK does not change the structure of the headers, it changes the way it is delivered. This header specific compression scheme was also created to mitigate CRIME, an attack used on the SPDY/2 protocol (the precursor to HTTP/2) which uses GZIP for compression.

### Server Push

As the name suggests, server push is the feature which allows the server to pre-emptively ‘push’ resources that it thinks the client/browser would require, rather than in HTTPS/1.1, where the client has to request for resources.

This is similar to inlining CSS, or Javascript via data URI, where only the necessary resources that are required to render a web page are pushed. This helps to reduce perceived render times, making the page load faster.

### What about QUIC?

If you do a bit of inspecting on HTTP/2 enabled sites, you might sometimes see this:

![Understanding HTTP/2 and optimising for performance](/images/understanding-http2-and-optimising-for-performance/6pDzskDNp.png)

Screenshot of requests using HTTP/2 + QUIC/39

QUIC, also known as Quick UDP internet Connection, is an new protocol for the web developed on top on UDP instead of TCP.

Essentially, QUIC combines the reliability of TCP with the speed of UDP, enabling packets to be delivered even faster than it is on a regular TCP connection.

The largest benefit from this can be seen on Youtube, where there are lesser re-buffering when watching videos over QUIC.

---

## How does affect Front End Performance?

The impact of HTTP/2 is huge, but first, let’s recap on some of the commonly known optimisation techniques used in HTTPS/1.1 — Domain Sharding and Asset Concatenation.

### What is Domain Sharding?

Sharding is a performance method where you serve your service on as many different hosts as possible. The reason for this is simple; Web browsers have a limit on the number of concurrent downloads allowed for each domain, typically 6 for modern browsers (A comprehensive list of browser limits can be seen [here](http://www.browserscope.org/?category=network&v=1)). This limit was set to reduce DDOS attempts to a server.

A sharding example seen on many HTTPS/1.1 sites would be to separate their assets into smaller subdomains. Youtube used to do it by having assets on multiple domains ([i1.ytimg.com](http://i1.ytimg.com), [i2.ytimg.com](http://i2.ytimg.com) etc.) they serve via HTTP/2 now.

For a website with a conservative 80 requests with domain sharding over 4 domains. you can serve resources in a quarter the time it would take if there was no domain sharding (in theory).

### What is Asset Concatenation?

In the HTTPS/1.x world, downloading a single file would be much faster than downloading multiple files at the same time. Asset concatenation is a optimisation technique that helps by combining all your multiple CSS and JS files into a single CSS and JS file.

### Does it apply in the HTTP/2 world?

Sharding uses concurrent downloads, which HTTP/2 does not benefit from due to the use of a single TCP connection to the server, and multiplexing.

However, you could implement sharding still for users on HTTPS/1.x connections. This [post](https://www.nginx.com/blog/7-tips-for-faster-http2-performance/) over at NGINX recommends it, and calls it Smart Sharding.

Unlike domain sharding, asset concatenation might not be an anti-pattern as it is perceived to be in HTTP/2. While it is generally a good idea to keep your files small, there might be other factors that make serving multiple files over HTTP/2 slower than it should be.

For [Khan Academy](http://engineering.khanacademy.org/posts/js-packaging-http2.htm), they found out that serving just under 300 javascript files to a single page led to a degradation in performance, due to the inefficiencies in compressing smaller files, as opposed to compressing a much bigger file.

> The end result of our analysis is that our page isn’t going to load any faster until we reduce the amount of JavaScript we use on the page. Tricks like trying to load a bunch of stuff in parallel, or aggressive caching, might seem like appealing shortcuts, but nothing replaces just auditing the code and making it need less “stuff.” — Khan Academy

### Should I simply switch to HTTP/2?

As previously mentioned in my [article](https://medium.com/@jacobtan/tackling-front-end-performance-strategy-tools-and-techniques-12ca542052e7) for tacking front end performance, it really depends on your organisation’s needs and goals, and also the users you are targeting.

I would still suggest enabling HTTP/2 for the immediate performance you gain from it, and then optimising your site/app accordingly. HTTP/2 is backwards compatible, and browsers that do not support HTTP/2 will fallback to using HTTPS/1.1 anyways.

The question would be how you would want to optimise your site for HTTP/2. There is simply no one-size-fits-all for front end performance, and that is beauty of the web.

You should be deciding how to optimise your site based on your analytics data. If majority of your users use UC Browser for Android or HTTPS/1.1 only browsers, then you might want to hold off the switch. If you are building a new site from scratch, it would be good to keep in mind that you would switch to HTTP/2 in the future, and optimise in a way that makes switching over to HTTP/2 easy.

---

## Summary

HTTP/2 is the major upgrade that the internet needs in order to continue supporting web sites with increasing amount of javascript, CSS, and assets.

As the adoption for HTTP/2 grows, it would be interesting to see new optimisation techniques that will be developed to cater to this new protocol, while co-existing with HTTPS/1.1 techniques.
