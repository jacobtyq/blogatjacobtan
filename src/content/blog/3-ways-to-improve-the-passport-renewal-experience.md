---
title: '3 ways to improve the passport renewal experience'
pubDate: 'Jan 20 2015'
tags: ['user interface', 'user experience', 'improving process']
description: "3 ways to improve the online passport renewal experience in Singapore (2015)"
---

Recently, I had to renew my passport for travel purposes. Due to my previous experience of having to wait hours to renew my passport, I never enjoyed the process and dread having to go through it again.
As a kid, I would have to visit the immigration office early in the morning (8am, it's early for a kid) with my Dad in hopes of securing a spot in the front of the line, handing over the forms to the nice lady at the counter, and hoping to get out within an hour or two.

As an adult, due to the work commitments and not knowing how long the wait would be, visiting the immigration office is a definite no. Doing it on a Saturday morning? I have better things to do than to wait in line.

Thankfully, I could save the hassle of visiting the office and have it renewed online instead. The process wasn't unnecessary pleasant, but I honestly felt that it could have been improved. I wouldn't call this a usability test since it was based on my experience.

### Assumptions
The renewal process will take place from a desktop computer. While it is possible to renew from your smartphone, you will need a photo editor to reduce the size of your passport photo, which is required for application.

#### 1. Consistency
By far, the most confusing bit for me was the documents / information that I would need to have on hand prior to application.
Here's the site once it has loaded.

![Screenshot of Application for Passport Online for ICA](/images/3-ways-to-improve-the-passport-renewal-experience/welcome-to-apples-2015.png)

![Screenshot of a section of the required information for Application for Passport Online for ICA](/images/3-ways-to-improve-the-passport-renewal-experience/passport-renewal-required-information-2015.png)

From the screenshot, here are the documents / information that I concluded I needed:
A passport photo
A credit card

Sure, I have those on hand. Let's get renewing already! I clicked on the 'Apply Passport' link and the page loaded with this pop-up.

![Screenshot of a popup from ICA with the required information](/images/3-ways-to-improve-the-passport-renewal-experience/ica-popup-2015.png)

Wait a minute?! Now you are saying that I need these information?
1. NRIC Number (Identity Document Number)
2. Date of Issue of Identity Document
3. Date of Passport Expiry
4. Contact Details
5. A credit card
6. A passport photo

Out of the 6, only credit card and passport photo were mentioned earlier. Some thoughts that came to me were:

> "My goal is to renew my passport, and it is being hindered by having to get the remaining information."
>
> "So what do I really need to order to renew my passport?"

And on clicking 'Ok', I get to the screen below:

![Screenshot of required information to complete a form for ICA](/images/3-ways-to-improve-the-passport-renewal-experience/passport-renewal-info-needed-2015.png)


Let's see what are the following information needed:
1. NRIC Number (Identity Document Number)
2. Date of Issue of Identity Document
3. Date of Passport Expiry
4. Contact Details
5. **A credit card**

And out of the 6 previously mentioned, you only need 5 and do not require my passport photo. Some thoughts were:

> "Do I still need my passport photo then? Why is it so inconsistent?"
> 
> "Why can't you tell me what is really required at the start?"

#### What can we learn from this?

Consistency of information is a huge issue here. Users have a goal in mind, which is to renew their passport.

With inconsistency of information, users are going to be left lost, exhausted, and frustrated even. 3 different sets of instructions indicating what information is required leaves users in confusion.

My suggestion would be to have the information displayed once at the start help reduce cognitive load.

#### 2. Forms

Nothing turns a user off more than a long and complicated form. Forms make or break conversion rates, and are essentially the most important aspect of a site.

Let's have a look at part of the form for passport renewal.

![Screenshot of the a form under the particulars of applicant section](/images/3-ways-to-improve-the-passport-renewal-experience/passport-renewal-particulars-2015.png)


It looks simple enough to fill up. Clicking on the year tab for the date of issue of NRIC / date of passport expiry, the following would appear:

![Screenshot of the a form under the particulars of applicant section with the date input open](/images/3-ways-to-improve-the-passport-renewal-experience/passport-renewal-enter-date-2015.png)

A really, really long year picker! It starts from the year 1916, all the way till the current year 2015.

**This is unnecessary.**

Let's break it down, starting for date of issue of NRIC. According to the [Immigration & Checkpoint Authority](https://web.archive.org/web/20150319072932/http://www.ica.gov.sg/page.aspx?pageid=209) and [Wikipedia](https://en.wikipedia.org/wiki/National_Registration_Identity_Card), all citizens and permanent residents were required to register or re-register for their ICs, which was thus introduced in 6 May 1966. Clearly, there would not be any issued before 1966, which makes displaying 1916–1965 redundant.

Similarly for the date of passport expiry, Singapore passports were introduced again in 1965, making displaying 1916–1964 redundant. To cater to both expired passports and passport that are due to expire within the year, I felt that it was necessary to include years when the passport were introduced (1965), till the present year and year ahead.

For example, if your passport expires on 30 June 2016, you would typically apply for an extension at least 6 months prior to the expiry date, which would be in the year 2015.

#### What can we learn from this?

Display information that are relevant to the users, and weed out unnecessary details. If the range of dates is small (ex. 2010–2015), display only that range. Having such a wide range of dates would not only increase the time needed to fill up the form, the chances of input errors would increase as well. Given that the task of passport renewal is already stressful on it's own, the site should be user friendly to reduce [visual clutter](https://www.nngroup.com/articles/minimize-cognitive-load/).

#### 3. Display waiting times

While the site has an estimate of the time taken to fill up the application form, there is no mention of processing time. Enquiring on your application would net you a ‘In Process’ status.

![Screenshot of application for passport renewal with application status](/images/3-ways-to-improve-the-passport-renewal-experience/passport-renewal-application-complete-2015.png)


As mentioned in my previous post, we expect to know how long something would take. Without knowing, we get put into a state of discomfort.

#### What can we learn from this?

Having details of which stage of ‘processing’ the application is at would be highly useful. My hypothesis is that while the feature is useful, it might not be fully utilised by users, or the processing system does not cater to such a level of detail. Though, a application tracker would be useful. Amazon did a great job with theirs.

![Screenshot of delivery tracking on Amazon](/images/3-ways-to-improve-the-passport-renewal-experience/amazon-out-for-delivery-2015.png)

### Conclusion

I believe that even a simple process such as renewing your passport can be improved. Usability testing should be conducted by default, and the results from the testing should be applied to improve a process if deemed viable and necessary.

When you confuse, and frustrate a user with bad user experience, they will leave your site and even warn others of their experience.

Make the journey pleasant, and not a rocky unexpected one.

*Disclaimer: I am in no way affiliated with the Immigration & Checkpoint Authority. I am a mere mortal that loves to improve process as a UX designer.*

--

**Note from 2026**: This post was originally posted [here](https://web.archive.org/web/20170209034959/http://www.jacobtan.co/3-ways-to-improve-the-passport-renewal-experience/), and then published on this [medium blog](https://medium.com/@jacobtan/3-ways-to-improve-the-passport-renewal-experience-1da08d62b5dc). I'm migrating some older content back here for archival purposes. Content is kept as close to the original as possible, though some screenshots may be missing.