---
title: "Hello World: Why I Switched to Astro"
description: "After years of building with React and Next.js, I decided to give Astro a shot. Here's what surprised me."
publishDate: 2024-01-15
author: "Ritesh"
tags: ["astro", "webdev", "beginners"]
featured: true
coverImage: "/images/hello-world.jpg"
---

## The Problem I Was Trying to Solve

Every project I built with React felt heavier than it needed to be. A simple blog with static content was shipping **130kb of JavaScript** just to render text that never changes. That felt wrong.

<br>

## First Look at Astro

The first thing that struck me was the `.astro` file format. It felt familiar — like someone took the best parts of React components and HTML templates and merged them.

<br>

```astro
---
const message = "This runs at build time";
---
<h1>{message}</h1>
```

<br>

No `useEffect`. No `useState`. Just data and markup.

<br>

## What "Zero JS by Default" Actually Means

It doesn't mean you *can't* use JavaScript. It means JavaScript is **opt-in**.

- Static content? Pure HTML.
- Need a counter? Add `client:load`.
- Need a form? Add `client:idle`.

<br>

You pay the JS cost only where you actually need it.

<br>

## The Verdict

Three weeks in, my Lighthouse scores are consistently above 95. I'm not fighting the framework anymore — I'm just building.