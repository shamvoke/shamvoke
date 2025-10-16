---
date: 2025-10-12 07:52:00
layout: post
title: Windows rituals vs Arch Linux sorcery
subtitle: On Linux, you dont need drivers, you are the driver!
description: Ever noticed how installing software on Windows feels like
  performing a ritual, while on Arch Linux it feels like casting a spell? Join
  me as we explore how both OS handles installation and updates
image: https://res.cloudinary.com/deudsgjbm/image/upload/v1760515332/linuxVsWindows_amdvbi.webp
optimized_image: https://res.cloudinary.com/deudsgjbm/image/upload/v1760515332/linuxVsWindows_amdvbi.webp
category: Linux
tags:
  - archlinux
  - paru
  - AUR
author: shamvoke
paginate: false
---
Picture this,  a clean install of <ins>windows 11</ins> Vs a clean install of <ins>Arch Linux</ins>. The first order of the day is to install your favorite software. _(Unless you're on Windows, where your first quest is to install drivers)_

For this post, we'll use these 5 apps:
`Google Chrome, VLC, Spotify, Discord and Docker.`

Lets explore how easy / complex the task is.


## The Windows way.
On a clean install of Windows, the process begins in the browser, usually **Edge browser** as it comes preinstalled. Followed by a series of google searches: _"Download Google chrome" "Download vlc" "Download Discord"_ and so on. Each search leads to a different website, each offering a different installer. Then comes the clicking ceremony of **"Next ➡️ Next ➡️ Agree ➡️ Skip ➡️ Install."** Repeat this till you have all your software installed. 

**Updates?** You still have to head back to each website to download new updates, unless your app supports auto update.  

**System update?** Not forgetting windows update will never touch you outdated software. 

> By the end, you have five new background updaters all fighting for startup space.

## The Arch way
Now imagine the same situation on Arch Linux, fresh install.

Let me tell you shamthing.
>  A clean Arch Linux install doesn't even have a browser preinstalled!

But wait, where then are we downloading our software from? 
Well, on Linux, what we call "software" is generally known as a **package.** And instead of visiting a bunch of random websites, these packages live in online repositories maintained by the community. You can download and install them manually, or better yet, use a **package manager** to handle everything for you.

To start, we open up the terminal.  _(Don't  be scared of the terminal. Trust me, it's easy. Let me show you)_
### Enter the AUR
The **Arch User Repository** (AUR).  Think of it like an app store, <del>but its not</del>. It's a massive collection of user-maintained packages. Includes Everything from Chrome to Spotify to obscure command-line tools you never knew existed.

By default, Arch uses **pacman** as its package manager. But while pacman is powerful, we're going to use a little helper that makes life easier, [**paru.**](https://github.com/Morganamilo/paru)
### Meet Paru.
**Paru** is basically pacman with superpowers. It automates downloads and installs, handles dependencies, and gives you a clean, interactive interface. Under the hood, it's still pacman.

First, we need to install paru. It's written in Rust, so we install Rust first.

```bash
sudo pacman -S rust
```

Then grab paru from GitHub and install it:

```bash
git clone https://aur.archlinux.org/paru.git
cd paru
makepkg -si
```

### Now it's time for the magic.
To install a package, let's say "google chrome" All you have to do is `paru -S package-name` 
```bash
paru -S google-chrome
```

You'll be asked for your password and maybe a few confirmations depending on the package being installed.

Want to skip confirmations? Add the `--noconfirm` flag:
```bash
paru -S google-chrome --noconfirm
```

Boom. Chrome installed. No questions asked. 

You can also search for packages with `paru package-name` 
```bash
paru chrome
```

### Batch install
Remember our five favorite apps? You can install them all in one command:
```bash
paru -S google-chrome vlc spotify discord docker --noconfirm
```

Enter your password, and watch paru do all the work.

Shamthing else,
> Used 5 packages as an example,  but you can add as many packages as you need. Installing your entire setup with a single command.

Need to uninstall something? use `paru -Rns package-name`
```bash
paru -Rns google-chrome
```

And when it’s time for updates? Just run this command:
```bash
paru
```

That's it. This updates your system and all installed packages! Clean, consistent, and fast.

### Wrapping It Up
To be fair, Windows isn't completely stuck in the installer age. Microsoft now has **Winget**, a command-line package manager, and community projects like [**UniGetUI**](https://github.com/marticliment/UniGetUI) give it a clean graphical front-end. Together, they finally let Windows users install and update apps from one place.

But compared to Linux package managers like **paru** or **pacman**, it still feels… bolted on. On Arch, the package manager _is_ the system. It's native. On Windows, tools like UniGetUI feel more like clever workarounds.

In the end, it's the same goal approached from two philosophies:
**Rituals** vs **Sorcery**.

Stay curious,

Sham.

