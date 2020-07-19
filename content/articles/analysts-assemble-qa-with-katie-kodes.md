---
title: Q&A With Katie Kodes, Salesforce and Python Integrations Programmer
path:  /analysts-assemble-qa-with-katie-kodes
date: 2019-04-07
categories: [interviews]
tags: [analysts-assemble]
thumbnail: /images/katie-kodes_600W_upd.png
---
![Katie Kodes](/images/katie-kodes_600W_upd.png)

_My favourite finding in doing this **Analysts Assemble** series has been just how humble and genuinely helpful the data science community is. And this week&#8217;s guest is certainly no exception. I&#8217;d first read Katie&#8217;s excellent article on [SQL Joins](https://dev.to/katiekodes/every-sql-join-youll-ever-need-2hbd) on Dev.to and when fellow Dev blogger [Helen Anderson](https://alanhylands.com/analysts-assemble-qa-helen-anderson/) recommended I speak to her for this series, I jumped at the opportunity. Katie takes us through her introduction to the world of programming, getting involved with the Salesforce eco-system and how she recommends people lift themselves, and others, up through building their overall skill-sets:_

### Tell us a bit about yourself, how did you get into the data space and what does your data journey look like so far?

Let&#8217;s get a few things out of the way. I&#8217;m white. I&#8217;m able-bodied. I speak English natively. I have no immigration worries. My childhood environments were safe and educational. I&#8217;m university-educated and had professional computer programmers as adult role models growing up.

As a teenager, my family paid for the roof over my head, not the other way around. That enabled me to look at summer job descriptions first, wages second. The job I had as the Great Recession of 2007/2008 began remained unscathed and provided my career incredible refuge.

I call myself a &#8220;late bloomer&#8221; into programming, but the soil I was planted in is a huge part of my story!

But jumping ahead to my first full-time jobs, I started learning a lot about databases through data entry roles that I applied for as a &#8220;fast & accurate typist.&#8221; At one job, people got so tired of writing query reports for me that they taught me how to build my own.

That&#8217;s how I learned about joining tables and avoiding &#8220;cross-joins.&#8221; Programming was much more engaging at the office than it had ever been in my few attempts to study it in a classroom.

I only recently thought about it, but the fact that all the programmers who delegated work and trained me were women &#8212; and that all their bosses were female programmers/architects &#8212; and that they weren&#8217;t all white or computer scientists &#8212; might have normalized programming as a career path in ways that being friends with hobbyist teenage boy coders previously hadn&#8217;t.

Eventually, when I felt &#8220;stuck&#8221;, I took night classes to formalize my studies, which advanced my foundation for further learning enormously.

Landing a database query reporting job on a team that had just purchased [Salesforce](https://www.salesforce.com) made me an [#AccidentalAdmin](https://twitter.com/hashtag/AccidentalAdmin). Trying to automate away [#WhyAdminsDrink](https://twitter.com/hashtag/WhyAdminsDrink) problems turned me into an [#Admineloper](https://twitter.com/hashtag/Admineloper) as I learned to write Salesforce Apex triggers and Python scripts.

As I&#8217;ve gone deeper into &#8220;Extract, Transform, Load&#8221; (ETL) integrations, I&#8217;ve returned to my traditional database roots and started working with a team of Oracle and SQL Server developers, DBAs, and integration specialists. We&#8217;re inventing my job description as needs arise, but so far it&#8217;s going to involve:

1) keeping &#8220;runbooks&#8221; of things that need to be done when we upgrade a database
  
2) helping with deduplication (which came immediately after I offloaded my old deduplication responsibilities to someone else &#8212; you just can&#8217;t run from that job, can you?)
  
3) working with 3rd-party vendors to troubleshoot and fix their integration products when upgrades make them fail in production
  
4) coding!

### What’s a typical day look like for you in your current data role? Which tools and languages do you use? Big team/small team/lone wolf? Office based/remote?

I try to exercise as often as I can, because computer work is brutal to your hands, eyes, and back. Recently, I&#8217;ve been able to use a pool and discovered treading water is great for your upper body AND timing meetup talk ideas. (Does anything speed up 30 minutes better than needing 40?)

As to the rest of the workday, I was lone-wolf as the &#8220;computer person&#8221; on a team of end users until joining my current team, which is small and office-based. I&#8217;ve veered toward the &#8220;integrations programming&#8221; side of data, not &#8220;analytics&#8221; or &#8220;statistics&#8221; or &#8220;visualization.&#8221; None of my coding projects typically take more than a week, and a lot of my work involves supporting them afterwards. Here are a few examples of requests I see:

&#8211; &#8220;Hey Katie, I loaded bad data into database A, and now the daily sync to database B you wrote filled database B with the bad data. What&#8217;s the proper sequence of cleanup tasks, and can you help me perform them in bulk?&#8221;

&#8211; &#8220;Hey Katie, we stopped requiring a snail-mail address on our &#8216;request info&#8217; form, so the automation you wrote us to remind us to send everyone a brochure is often irrelevant. Can you change it to only create a reminder if they asked for paper mail?&#8221;

_**Tools:**_

&#8211; I use point-and-click tools with Salesforce as much as I can, but occasionally write Python scripts to clean data on my hard drive or over an API, and I write Salesforce database triggers in their Java-like language called &#8220;Apex.&#8221;
  
&#8211; With Oracle and SQL Server databases, most of what I do is in SQL and PL/SQL or T-SQL.
  
&#8211; Enterprise-level ETL tools for scheduling inter-database communications often involve what I like to call &#8220;point-and-click programming.&#8221;

Integration work is pretty &#8220;MacGyver&#8221;-ey. You access data with the tools your company invested in, and you cobble solutions together as effectively and efficiently as they allow.

### You&#8217;ve had a great response to your own blog and your articles on Dev.to. How important do you think it is for data professionals, at all stages of their career, to share publicly what they are doing and learning?

I have priceless colleagues who don&#8217;t seem to share what they know far beyond the water cooler.

But don&#8217;t be afraid to scratch that itch if you have it, any time you have an &#8220;aha!&#8221; or &#8220;???&#8221; moment.

As Jessica Kerr and Julia Evans pointed out in episode 16 of the &#8220;[Greater than Code](https://www.greaterthancode.com/blogging-is-shipping)&#8221; podcast, people who just learned a topic often explain it best to people who are trying to learn it.

Meetups (including in-company user groups) and local conferences are a very forgiving setting for stumbling through public speaking. Blogs and Twitter are great ways to practice writing concisely.

You can always start a new blog as you &#8220;level up&#8221; your writing and speaking experience to consolidate your &#8220;best-of&#8221; moments and move on from your &#8220;newbie&#8221; days.

### Where do you see your own data career going next? Building on your technical skills or moving into a more management-based role?

At the moment, technical skills interest me far more than managing people, as much as I love being around them.

But never say never!

### If you had a list of “best-kept-secrets” (websites, books, coaches) you’d recommend, which would you recommend?

Alan, you gave me so much decision anxiety when you asked this question. I got stuck for days until I had added all the books at my office desk to the &#8220;resources&#8221; section of my website so they&#8217;d know I love them, too.

Other people will cover the big ones like FreeCodeCamp and Dev.to, so let me share two unusual dusty old books:

1. &#8220;[Ones and Zeros : Understanding Boolean Algebra, Digital Circuits, and the Logic of Sets](https://www.worldcat.org/title/ones-and-zeros-understanding-boolean-algebra-digital-circuits-and-the-logic-of-sets/oclc/316114920/editions)&#8221; was a random library find that absorbed me nightly. I&#8217;ve always loved conditional logic, but this book really threw down the gauntlet and asked me, &#8220;Oh, so you think you can AND/OR?&#8221;

2. &#8220;[Introduction to Unix and Shell Programming](https://dealoz.com/prod?gtin=09788177587456&sort=total_cost%3Aasc)&#8221;  (Venkateshmurthy). This is published in India and can be hard to find in some countries, but it&#8217;s worth the effort. After many failed efforts, this was the friendly, thorough explanation that finally taught me Unix.

### What is the number one piece of advice you give to aspiring data scientists?

One? Just one? Can I pick two? Please?

_**1. Master the art of concisely reframing your &#8220;shortcomings&#8221; so you&#8217;re in charge of the narrative.**_ I hate to make a &#8220;case study&#8221; out of another person&#8217;s struggle rather than my own, but I think an issue that foreign students sometimes face makes a great example.

Friends I&#8217;ve known often struggled to find work permitted by their student visas, either because companies &#8220;don&#8217;t offer internships&#8221; (in American English, that has a pretty narrow connotation in the world of short-term work) or presume it costs money to hire visa-holders (true with &#8220;work visas,&#8221; but free of charge for the limited work permissions included in a &#8220;student visa&#8221;).

I&#8217;ve suggested working the following into cover letters and networking encounters: &#8220;My student visa allows me to work in the US for a few years at no cost to employers, so I&#8217;m looking for short-term opportunities during summers and after I graduate to take advantage of that.&#8221;

Humans, including employers, seem to make up reasons they can&#8217;t do things out of fear of the unknown. Apply your &#8220;explain it like I&#8217;m five&#8221; and &#8220;elevator speech&#8221; skills to whatever you&#8217;re terrified someone will &#8220;judge&#8221; you about. Offer your story first and don&#8217;t leave people gaps to fill with their own imaginations!

_**2. Ask yourself what you love about data.**_
  
&#8211; Storytelling?
  
&#8211; Asking questions and exploring the unknown?
  
&#8211; Math and statistics?
  
&#8211; Programming?

Even if you&#8217;re just interested for the money (that&#8217;s okay &#8212; everyone has to eat!), what aspect of &#8220;data&#8221; scares you the least to try to make a living with? What seems to suit you?

Specialize in that as you start, to quickly ramp up into an employable niche.

&#8220;Know what you don&#8217;t know,&#8221; though, and stay big-picture informed about what &#8220;data scientists&#8221; with other specialties are doing as time marches on. It&#8217;ll help you decide what new developments in your specialty are really relevant, and it&#8217;ll help you decide whether you&#8217;re interested in adding a new specialty.

### Where can readers find you online?

[My personal site &#8211; Katie Kodes][1]

[Dev.to][2]

[Twitter &#8211; @katiekodes][3]

 [1]: https://katiekodes.com/
 [2]: https://dev.to/katiekodes
 [3]: https://www.twitter.com/katiekodes