---
title: "Why Astro Sites Are Fast by Default"
description: "Speed isn't something you optimize for in Astro — it's the starting point. Let's break down exactly why."
publishDate: 2024-02-20
author: "Ritesh"
tags: ["performance", "astro", "core-web-vitals"]
featured: true
coverImage: "/images/astro-fast.jpg"
---

## Speed Is the Default, Not the Goal

Most frameworks make you work for performance. You add lazy loading, code splitting, memoization — all to get back to something close to what a plain HTML file gives you for free.

Astro flips this. The default output is plain HTML. You work to *add* interactivity, not to *remove* its cost.

<br>

## The Numbers Behind It

Here's a rough comparison of what ships to the browser:

<br>

| Approach | JS on a static blog page |
|---|---|
| Create React App | ~140kb |
| Next.js (SSR) | ~90kb |
| Astro (no islands) | ~0kb |
| Astro (with islands) | only what's interactive |

<br>

## Build Time vs Runtime

Astro does its heavy lifting at **build time**, not in the browser:

- Data fetching → build time
- Markdown rendering → build time  
- Component rendering → build time
- Template logic → build time

<br>

By the time a user opens your page, the hard work is already done. The browser just displays HTML.

<br>

## Core Web Vitals Impact

Because there's no JS blocking the render:

- **LCP** (Largest Contentful Paint) is fast — content is already in the HTML
- **CLS** (Cumulative Layout Shift) is minimal — no JS-driven layout changes
- **FID/INP** is low — less JS means less main thread competition

<br>

## The Takeaway

Performance in Astro isn't a feature you enable. It's what you have before you do anything at all.