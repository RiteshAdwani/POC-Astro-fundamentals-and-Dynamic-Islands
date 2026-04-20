---
title: "Content Collections: Type-Safe Content in Astro"
description: "Content Collections are one of Astro's most underrated features. Here's how they bring structure and safety to your markdown files."
publishDate: 2024-03-10
author: "Ritesh"
tags: ["astro", "content", "typescript"]
featured: false
coverImage: "/images/collections.jpg"
---

## The Problem with Loose Markdown

Before Content Collections, managing markdown files felt fragile. You'd `import.meta.glob()` your files, hope the frontmatter was correct, and find out it wasn't when something broke in production.

<br>

```javascript
// The old way — no type safety, no validation
const posts = import.meta.glob('./posts/*.md');
```
<br>

## Enter Content Collections

Content Collections let you define a **schema** for your content. Every markdown file must satisfy it, or the build fails.

<br>

```typescript
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()),
  })
});
```

<br>

## What You Get

**Type safety in your pages:**

<br>

```astro
---
const posts = await getCollection('blog');
// posts is fully typed — title, publishDate, tags all have types
---
```

<br>

**Validation at build time:**

<br>

```
// Missing the title field in a .md file?
// You get this:
Error: "title" is required in blog/my-post.md
```

<br>

**Transformed data:** Astro automatically converts your frontmatter types. A `publishDate: 2024-01-15` string in markdown becomes a proper JavaScript `Date` object in your component.

<br>

## The Result

Your content layer is as type-safe as your component layer. Refactor a field name in the schema — TypeScript immediately shows you every place that needs updating.

That's a level of confidence most CMS setups can't offer.