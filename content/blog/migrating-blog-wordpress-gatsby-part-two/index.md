---
title:  "Migrating My Blog From Wordpress To Gatsby - Part 2"
date:   "2019-05-12T00:00:00.000Z"
description:    "Migrating My Blog From Wordpress To Gatsby - Part 2"
---
![Cover of F. Scott Fitzgerald's The Great Gatsby](./f-scott-gatsby.jpg)

I wrote in [Part One](https://www.alanhylands.com/migrating-blog-wordpress-gatsby-part-one/) about finally biting the bullet and giving Gatsby a go. Having dipped my toe in it's delectable waters I knew full well that it was only a matter of time before I went deeper down the rabbit hole.

So I spent the past couple of weeks converting my main data and analytics site [Simple Analytical](https://simpleanalytical.com) to Gatsby from Wordpress. Yes, there is an element of yak shaving in there.

Wordpress is a fine CMS and so it should be - around 30% of the entire internet runs on it. That doesn't mean that it's without fault however and the longer I used it for that site, the more it started to irk me.

To be fair, not all of these were the fault of the Wordpress eco-system, in fact, probably few of them were. But anyone who has done anything with Wordpress over the past five years will tell you how it's virtually unrecognisable from the chippy young go-getter it was back in it's early days.

I had a few major issues:

1. **SECURITY**

My reseller hosting package kept falling over due to mod_security rules getting flagged. Not sure whether it's fair to strictly blame WP for this. When a long established hosting company tells you that they'll have to switch the security rules off altogether or you won't be able to edit any of your existing posts then you know something is amiss with your software.

Wordpress is notorious for it's inability to maintain adequate security levels at the best of times. Any Wordpress admin who says they haven't ever been hacked just hasn't been in the game long enough. It's almost an inevitability and a rite of passage.

I was updating plug-ins EVERY day. And I mean EVERY day. It's great that the developers were patching things quickly and regularly but when it turns into a tedious daily job monitoring and making sure the updates happen, it's time to re-evaluate your approach.

When, as I said above, the host tells you that the only eay to let you edit posts is to switch more security off, it sends alarm bells ringing. LOUD ONES.

2. **SO MANY PLUG-INS**

The great thing about the Wordpress eco-system is the sheer number of plug-ins. One of the worst things about the Wordpress eco-system is the sheer number of plug-ins. By the time I'd had enough with the daily updates, I was running 18 different plug-ins on my WP install for Simple Analytical.

No-one made me use them all but I'll swear blind that none of them were extraneous. When you get to the point where you have to install yet another plug-in to shut down the use of the new Gutenberg editor that you didn't want in the first place, it's time to re-evaluate your choices in life. You'll notice I was getting to the re-evaluation point quite a lot here.

3. **SPEED OR LACK THEREOF**

> Tomorrow we will run faster.

The main reason behind me moving [Simple Analytical](https://simpleanalytical.com) to Gatsby can be summed up in the quote above. Simply put, building my blog site with Gatsby and hosting on Netlify lets it go like the proverbial shit off a shovel. For the non-Northern Irish amonsgt you, that means it's rather quick. Like greased lightning kind of quick. Usain Bolt quick.

Testing on localhost is never a fair representation of what it will be like in the wild but even there it was looking DAMN good. Getting it going on Github and Netlify didn't lose any of that speed and I couldn't be happier.