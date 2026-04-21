---
date: "2026-04-20T17:18:07Z"
title: "A Sham journey to Arch Linux"
shamthing: "How a penguine 🐧 broke my windows 🪟"
excerpt: "From a curious USB boot to a bare-metal obsession, follow my journey through the rabbit hole of distro-hopping. Discover why I ditched Windows for good and how Arch Linux became my ultimate daily driver through endless experimentation and refinement."
coverImage: "/_FeaturedImages/15_A Sham journey to Arch Linux.webp"
coverImageCredit:
  name: "Sham voke"
  ImageUrl: "https://shamvoke.com"
ogImage:
  url: "/_FeaturedImages/15_A Sham journey to Arch Linux.webp"
category: "linux"
tags:
  - archlinux
  - linux
  - KDEplasma
author:
  name: "Sham Voke"
  picture: "/shamvoke.webp"
---
They say you don't choose Arch, Arch chooses you. Well, for me I didn't even know Arch existed when I first stepped foot on Linux territory.

#### The first switch

I recall it all started with curious me following a WiFi hack guide on YouTube! <del>Curiosity killed the cat for sure.</del> What caught my attention was seeing the guy boot a full [Kali Linux OS](https://www.kali.org/) from a USB drive! **I had to try that!** I didn't become a master hacker, but I noticed something immediate: The system was fast, noticeably faster than my fully installed Windows setup. _It didn't make sense._ This was a live environment running off a USB, yet it felt smoother than what I had been using every day?

Digging a bit deeper, learned I could **dual-boot** Linux with my Windows! And considering Kali Linux was clearly optimized for hacking, my first stop for a Linux install was [UBUNTU](https://ubuntu.com/). Did my first dual-boot install, but the Ubuntu "default" life wasn't for me. I became a regular on [**DistroWatch**](https://distrowatch.com/), falling down the rabbit hole of **distro-hopping**. I tried almost everything! I mean, I even tried **Deepin OS**. But there was always a catch: I hated how most distros handled software installations.

#### The Windows Killer

Then came [Manjaro Linux.](https://manjaro.org/) This was the turning point. It was the first Linux OS stable enough and "right" enough that I finally did the unthinkable. **I wiped Windows from my disk for good.** No more dual booting. With Manjaro, installing software was a breeze. And that got me hooked.

#### The Desktop Environment

One thing you learn quickly in the Linux world is that _Linux itself is just a kernel_. The invisible engine under the hood. To actually interact with it, you need a **Desktop Environment** (DE). This is your cockpit, and choosing the right one is a very personal decision.

At the time, I was a [GNOME](https://www.gnome.org/) devotee. I loved how minimal it felt. Clean, distraction-free, just enough to get things done. On the other hand, I couldn't stand [KDE Plasma.](https://kde.org/plasma-desktop/) It felt like too much, too many options, too many settings, too much everything.

_Or so I thought..._

#### The second switch

Later on, I found out Manjaro is based on Arch Linux, and once again, curiosity got the better of me. The plan was simple in my head, try Arch, experience it, then go back to my "stable Manjaro."

_That plan didn't go as planned._

From the very first boot, Arch felt different. It's hard to explain unless you've experienced it yourself, but it felt closer to the <del>bare metal</del> hardware. Like there was less between me and the system. No extra layers, no unnecessary decisions made for me. Just a system, and me in control.

_That was it._

Arch became my main OS from the first boot, and I never looked back!

#### The third switch

As I got deeper into Arch, something else shifted.

GNOME started to feel limited.

I had built up a collection of _'my favorite'_ GNOME extensions just to make it behave the way I wanted. It worked, but it didn't feel natural anymore. So I gave KDE another shot.

_And this time, everything clicked!_

Everything I had been trying to achieve with extensions in GNOME was already there in KDE. Built in. Ready to use. Ironically, I ended up loving KDE for the exact same reason I once hated it, it had too many options. Only now, those options felt like freedom.

#### The final switch

I'll be honest. I only did a full manual install once. I respect the process, but I value efficiency. After that initial install, I went hunting for a 'better' way to install arch. The result of that hunt was [archfi.](https://github.com/MatMoul/archfi) A script I found on GitHub by a guy named MatMoul. For me, both the script and its creator were criminally underrated. I could install Arch Linux with two simple terminal commands.

1. to download the script

`curl -LO matmoul.github.io/archfi`

2. to launch Archfi!

`sh archfi`

Then, the Arch team introduced their own official installer.

`archinstall`

I have watched it grow over time. Eventually, the official script matured. **One command,** and I was in.

Simple.

#### The Arch team

The thing about Arch team is they release an updated `.iso` on the 1st of every month! 12 times a year! And one thing about me is... I love updates!

>For a long time, I had a habit: by the 3rd of every month, I was doing a fresh install. I know, I know. _“you can just run `pacman -Syu`!”_ but where is the fun in that?

I started reinstalling Arch as a hobby. Every month. Sometimes more. Each install became an experiment. `Different file systems,` `different boot-loaders,` `different configurations.`

Four file system options? That meant four installs. Bootloaders? Another round. Zswap enabled, disabled, tested again. I kept going, not out of necessity, but pure curiosity.

#### No more switch

Eventually, all that experimentation led me to a setup that felt right.

**GRUB** as my boot-loader. **XFS** for the file system, _incredibly fast on SSD_ btw. **No zswap**, opted for manually configured swap file. **Pulse-audio** for sound. X11 for display manager, at least for a long time, until recently when all devs decided X11 was ancient and **Wayland** is the future. And **KDE Plasma** as my desktop environment.

As far as am concerned, It isn't just a setup.

It is something I have built, tested, and refined over time.

#### An ocean

And then there's the [AUR](https://aur.archlinux.org/) - Arch User Repository.

The AUR changes everything.

It's like an ocean of software. Almost anything I needed was there, ready to install. It made other distributions feel limited in comparison. Feeling like toys if you ask me.

Well, almost everything.

Adobe still hasn't made its way there 😄 <del>Who needs Adobe anyway, I DO!</del>

#### The map

And finally, the [Arch Wiki.](https://wiki.archlinux.org/title/Main_page)

At some point, it stops feeling like documentation. It feels like something else entirely. Every problem I ran into, it already had the answer. Clear, detailed, and reliable.

It became my go to for everything Arch.

#### The destination

![My Archlinux KDE setup screenshot](https://res.cloudinary.com/deudsgjbm/image/upload/v1776719055/Sham_Archlinux_KDE_setup_phglqc.webp "Sham's desktop screenshot!")

I've spent years breaking, re-installing, and optimizing Arch <del>so you don't have to</del>. I've finally settled on my _"perfect"_ setup.

#### Notable Distros

Along the journey, there are some distros that earned my respect, worth checking out:

1. [**Linux Mint:**](https://linuxmint.com/) This one is so stable it almost made me switch! Based on UBUNTU but it beats UBUNTU any day and everyday! _Went back to Arch because... AUR._

2. [**XeroLinux:**](https://xerolinux.xyz/) A hidden gem I found in the wild. Based on Arch. Steel solid! _Went back because... Vanilla Arch._

3. [**CachyOS:**](https://cachyos.org/) A new player on the scene. Based on Arch. Rock solid. _Went back because... Vanilla Arch._

_Stay tuned for my next post, where I'll drop the full, step-by-step guide on how I install my Arch Linux daily driver._ Plus a few tricks I have learned along the years!

Stay Curious,

Sham.
