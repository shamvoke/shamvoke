---
date: "2026-07-11T10:54:12Z"
title: "A Reason to Forget All Your Passwords"
shamthing: "Because life's too short for installer wizards. 😅"
excerpt: "Discover how UniGetUI brings the convenience of Linux package managers to Windows. Learn how to install, update, and manage applications from Winget, Chocolatey, Scoop, and more through one simple interface, making software installation faster, safer, and far less frustrating."
featuredImage: "25_why-unigetui-is-the-first-app-i-install-on-windows.webp"
ogImage: "https://res.cloudinary.com/deudsgjbm/image/upload/v1783862856/25_why-unigetui-is-the-first-app-i-install-on-windows_fgk1ui.webp"
category: "windows"
tags:
  - winget
  - package manager
  - productivity
---

I've been terrible with passwords for years.

And to make the matter worse, I am the type of person who creates accounts left, right and center. A new service? Sign up. Interesting app? Create an account. Random website I might need once in six months? Yep, I'm making an account.

For the longest time, I dealt with this the way most people do. I reused passwords, tried to remember variations of passwords, forgot them, reset them, and occasionally stared at a login screen wondering what version of my password I'd used three years ago.

Honestly, basic password management should be taught in every school.

Eventually, I gave in and got a password manager.

For a long time, that password manager was Bitwarden.

And it worked.

Really well, actually.

### Bitwarden

Bitwarden was the first password manager that made me properly understand why password managers exist.

Instead of trying to remember dozens, eventually hundreds, of passwords, I only needed to remember one.

Better yet, I could finally start using unique passwords everywhere.

That alone was a massive upgrade.

I used Bitwarden for quite a while and had very little to complain about. It synced across my devices, worked with my browsers, generated strong passwords, and generally did exactly what I needed.

But then I discovered KeePass.

### KeePass

Fueled by curiosity, I decided to give KeePass a try.

What immediately caught my attention was something surprisingly simple.

The database was mine.

Instead of my credentials living primarily inside a company's ecosystem, I had an actual encrypted password database file that I could keep, back up, move around, and manage myself.

That appealed to me.

I used KeePass for a while and genuinely liked it.

Then, for whatever reason, I went back to Bitwarden.

At the time, I think the convenience won.

Bitwarden felt more polished for the way I was using it, especially when it came to browsers and syncing between devices.

Then I discovered KeePassXC.

And that's when things changed.

### KeePassXC

KeePassXC is a community-driven fork of KeePass, designed as a modern, cross-platform password manager.

At first, I didn't expect much.

I already knew KeePass.

But KeePassXC felt like the version of KeePass that finally clicked with me.

It kept the thing I loved most about KeePass, the database belongs to me, while adding the kind of features and integrations I wanted from a modern password manager.

That was the day I uninstalled Bitwarden.

### KeePassXC Vs Bitwarden

Here's the thing: the more I used both, the more I realized just how much these two actually have in common.

KeePassXC and Bitwarden are surprisingly close when it comes to the features that actually matter. Both can generate strong passwords, autofill credentials, handle passkeys, integrate with browsers, store secure notes, organize credentials, and do the basic job of a password manager extremely well.

So this isn't really a case of KeePassXC having all the features while Bitwarden doesn't.

Bitwarden is open source and has a very generous free plan. KeePassXC is also free and open source. Both are actively developed, both have strong security models, and both are perfectly capable password managers.

If anything, Bitwarden is probably the easier recommendation for most people.

Install it, sign in, install the browser extension, and your vault follows you across your websites. There's very little to think about.

KeePassXC takes a different approach.

Your vault is an encrypted .kdbx file that you control. KeePassXC opens and manages that database locally, while you decide how the file is stored, backed up, and synchronized between your devices.

And that's where the difference became important for me.

I'm a web developer, and I rarely use just one browser.

Let's say I have two computers, each with two browsers, plus my Android phone.

With Bitwarden, I'm dealing with something like this:

Computer 1 → Browser A → Bitwarden
Computer 1 → Browser B → Bitwarden

Computer 2 → Browser A → Bitwarden
Computer 2 → Browser B → Bitwarden

Phone → Bitwarden

That's a lot of browser extensions, a lot of sessions, and, for me, a lot of little moments where I have to unlock or interact with Bitwarden.

KeePassXC fits my workflow differently.

Computer 1 → KeePassXC → Browser A + Browser B
Computer 2 → KeePassXC → Browser A + Browser B
Phone → KeePassDX

I unlock KeePassXC on the computer, and all the browsers I've connected to it can use the same database.

The browser extension is essentially the bridge. KeePassXC is the application actually handling my vault.

That might sound like a small distinction, but when you're constantly jumping between browsers, it makes a surprisingly big difference.

Then there is the customization.

KeePassXC gives me a ridiculous amount of control over how I structure my vault and what I store inside each entry. Custom fields, attributes, notes, attachments, password history, Auto-Type, Auto-Login, and plenty of other little things make it feel less like a traditional password manager and more like a personal encrypted database that happens to be incredibly good at managing passwords.

>The auto-login feature is pure magic! Yet so dangerous I only enable it on my main browser. Unlike auto-type which autofills the username and password, auto-login actually clicks the login button for you!

And that's ultimately why I chose KeePassXC.

Not because Bitwarden is bad.

It isn't.

Not because Bitwarden's free plan is inadequate.

It isn't.

And certainly not because KeePassXC somehow has every feature Bitwarden doesn't.

The two actually match surprisingly closely.

I chose KeePassXC because its workflow makes more sense to me.

If you use one browser, have a straightforward device setup, and want effortless cloud synchronization, I'd have no problem recommending Bitwarden.

But if you're like me, constantly switching between browsers, operating systems, and devices, and you like having direct control over your password database, KeePassXC is hard to beat.

For me, Bitwarden was a great password manager.

KeePassXC became my password manager.

And somewhere along the way, the password chaos disappeared.

Now I only remember one.

The master password that unlocks all other passwords.

That's the beauty of a good password manager.

You don't remember your passwords.

You forget them.

Stay Curious,

sham

