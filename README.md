# Astro Fundamentals

This project demonstrates core concepts of the [Astro](https://astro.build/) framework, focusing on performance, content collections, schema validation, multi-framework support, advanced routing, and data management.

## 🚀 What is Astro?

Astro is a modern web framework for building fast, content-rich websites. It delivers minimal JavaScript to the browser by default, using server-first rendering and enabling interactivity only where needed via "islands architecture".

**Key Features:**
- Zero-JS by default: Only ships JavaScript for interactive components.
- Content Collections: Structured content management with schema validation.
- Multi-Framework Support: Use React, Vue, and more inside Astro via integration plugins.
- File-based Routing: Create pages and dynamic routes with getStaticPaths.
- Environment Variables: Secure configuration management.
- TypeScript Support: Full type safety out of the box.

## 📁 Project Structure

```text
astro-fundamentals/
├── astro.config.mjs          # Astro configuration with integrations
├── package.json
├── tsconfig.json
├── public/                   # Static assets
└── src/
    ├── components/           # UI components (Astro, React, Vue, etc.)
    │   ├── TechStack.tsx     # React component
    │   ├── AuthorCard/
    │   │   └── AuthorCard.vue
    │   ├── Footer/
    │   │   ├── Footer.astro
    │   │   └── Footer.css    # Scoped CSS
    │   ├── Navbar/
    │   │   ├── Navbar.astro
    │   │   └── Navbar.css
    │   ├── PostCard/
    │   │   ├── PostCard.astro
    │   │   └── PostCard.css
    │   └── ProjectCard/
    │       ├── ProjectCard.astro
    │       └── ProjectCard.css
    ├── content/              # Markdown content (blog posts)
    │   └── blog/
    │       ├── astro-is-fast.md
    │       ├── content-collections.md
    │       └── hello-world.md
    ├── layouts/              # Layout components
    │   └── BaseLayout.astro  # Contains <slot />
    ├── lib/                  # Utility libraries
    │   └── github.ts         # Data fetching utilities
    ├── pages/                # Route pages (file-based routing)
    │   ├── index.astro
    │   ├── about/
    │   │   └── index.astro
    │   ├── blog/
    │   │   ├── index.astro
    │   │   └── [slug]/
    │   │       └── index.astro  # Uses getStaticPaths
    │   └── projects/
    │       └── index.astro
    ├── types/                # TypeScript types
    │   └── projects.ts
    └── content.config.ts     # Content collections & schema
```

## 🧩 Concepts & Features Used

### 1. Content Collections & Schema Validation
**Location:** `src/content.config.ts`

Content Collections provide a type-safe way to organize and validate structured content (like blog posts).
- Define collections using `defineCollection()` with Zod schemas.
- Ensures all blog posts have required fields before they're used in pages.
- Example schema:
  ```ts
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    author: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    coverImage: z.string().optional(),
  })
  ```
- **Benefit:** Catch content errors at build time, not runtime.

### 2. Frontmatter
**Location:** `src/content/blog/*.md`

Frontmatter is metadata at the top of Markdown files, written in YAML.
- Example:
  ```markdown
  ---
  title: "Astro is Fast"
  description: "Why Astro is one of the fastest frameworks"
  publishDate: 2026-04-15
  author: "Ritesh"
  tags: ["astro", "performance", "web"]
  featured: true
  ---
  # Content starts here...
  ```
- **Benefit:** Separates metadata from content, validated against your schema.

### 3. Multi-Framework Support (React & Vue)
**Location:** `astro.config.mjs`

Astro supports mixing React, Vue, and other frameworks in the same project.
- Configure integrations in `astro.config.mjs`:
  ```js
  import { defineConfig } from 'astro/config';
  import react from '@astrojs/react';
  import vue from '@astrojs/vue';

  export default defineConfig({
    integrations: [react(), vue()]
  });
  ```
- **Why it matters:**
  - Use `.tsx` files for React components (e.g., `TechStack.tsx`)
  - Use `.vue` files for Vue components (e.g., `AuthorCard.vue`)
  - Each component gets its own build pipeline
  - Astro handles the complexity of multiple frameworks

### 4. ClientRouter
**Purpose:** Enable client-side navigation for faster page transitions.

The `@astrojs/client-router` integration allows your site to navigate between pages without full page reloads:
- Add to `astro.config.mjs`:
  ```js
  import { defineConfig } from 'astro/config';
  import { clientRouter } from '@astrojs/client-router';
  
  export default defineConfig({
    integrations: [clientRouter()]
  });
  ```
- **Benefit:** SPA-like experience with partial page updates.

### 5. Environment Variables with Type Safety
**Locations:** `astro.config.mjs` (schema) and `.env` (values)

Astro provides built-in environment variable validation with type safety using `envField`.
- Define your environment schema in `astro.config.mjs`:
  ```js
  import { defineConfig, envField } from 'astro/config';
  
  export default defineConfig({
    env: {
      schema: {
        GITHUB_TOKEN: envField.string({ context: "server", access: "secret" }),
        PUBLIC_API_URL: envField.string({ context: "client", access: "public" }),
      },
    },
  });
  ```
- **`context`:** `"server"` or `"client"` - where the variable is accessible
- **`access`:** `"secret"` or `"public"` - security level
- Access them with `import.meta.env`:
  ```js
  const token = import.meta.env.GITHUB_TOKEN; // Server-only
  const apiUrl = import.meta.env.PUBLIC_API_URL; // Client-side accessible
  ```

**Example `.env` file:**
```env
# Server-only (NOT exposed to browser)
GITHUB_TOKEN=your_github_token

# Client accessible
PUBLIC_API_URL=your_api_url
```

**Benefits:**
- Type-safe environment variables - errors caught at build time.
- Explicit context declaration prevents accidental exposure of secrets.
- Clear validation rules for required/optional variables.

### 6. File-Based Routing & getStaticPaths
**Location:** `src/pages/`

Astro automatically creates routes from your page structure.
- `src/pages/index.astro` → `/`
- `src/pages/about/index.astro` → `/about`
- `src/pages/blog/index.astro` → `/blog`
- `src/pages/blog/[slug]/index.astro` → `/blog/hello-world`, `/blog/astro-is-fast`, etc.

For dynamic routes like `/blog/[slug]/`, use `getStaticPaths()` to tell Astro which pages to generate:
```js
export async function getStaticPaths() {
  const posts = await getCollection('blog');
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post },
  }));
}

const { post } = Astro.props;
```
- **Benefit:** Generate static pages at build time for each piece of content.

### 7. Slots
**Location:** Reusable layout components like `BaseLayout.astro`

Slots allow components to accept child content.
- In the layout:
  ```astro
  ---
  // src/layouts/BaseLayout.astro
  ---
  <html>
    <body>
      <Navbar />
      <main>
        <slot /> <!-- Child content goes here -->
      </main>
      <Footer />
    </body>
  </html>
  ```
- In a page:
  ```astro
  ---
  import BaseLayout from '../layouts/BaseLayout.astro';
  ---
  <BaseLayout>
    <h1>My Page Content</h1>
    <!-- This content fills the <slot /> -->
  </BaseLayout>
  ```
- **Benefit:** DRY (Don't Repeat Yourself) - shared structure across pages.

### 8. Scoped CSS
**Location:** `.css` files next to components (e.g., `Footer.css` next to `Footer.astro`)

Astro automatically scopes CSS to individual components.
- Styles defined in `Footer.css` only apply to `Footer.astro`.
- No naming conflicts across components.
- Example:
  ```css
  /* Footer.css - only applies to Footer.astro */
  .footer {
    background: #f0f0f0;
    padding: 2rem;
  }
  ```
- **In Astro files, use `<style>` tags:**
  ```astro
  ---
  // styles here
  ---
  <style>
    .footer {
      background: #f0f0f0;
    }
  </style>
  <footer class="footer">...</footer>
  ```
- **Benefit:** CSS is automatically scoped; no need for BEM naming or CSS-in-JS.

### 9. Data Fetching
**Purpose:** Load external data at build time or request time.

- **At build time (recommended):**
  ```ts
  // src/lib/github.ts
  export async function fetchGitHubUser(username: string) {
    const res = await fetch(`https://api.github.com/users/${username}`);
    return res.json();
  }
  ```
- **In a page:**
  ```astro
  ---
  import { fetchGitHubUser } from '../lib/github';
  const user = await fetchGitHubUser('username');
  ---
  <p>Name: {user.name}</p>
  ```
- **Benefit:** Data is fetched once at build time, not on every request.

### 10. Component Organization
- Components are grouped by feature (e.g., `Footer/`, `Navbar/`, `PostCard/`).
- Related styles (`.css`) and components (`.astro`, `.tsx`, `.vue`) are colocated.
- Makes it easy to find and maintain related code.

### 11. TypeScript Support
- **Location:** `tsconfig.json` and `src/types/`
- Define custom types in `src/types/projects.ts`.
- Full type safety in `.astro`, `.ts`, and `.tsx` files.
- Catch errors at build time.

## 🧞 Useful Commands

All commands are run from the root of the project:

| Command             | Action                                           |
|---------------------|-------------------------------------------------|
| `npm install`       | Installs dependencies                            |
| `npm run dev`       | Starts local dev server at `localhost:4321`      |
| `npm run build`     | Build your production site to `./dist/`          |
| `npm run preview`   | Preview your build locally, before deploying     |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro check` |

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build)

---
This project is a practical demonstration of Astro's performance-first approach, content collections, multi-framework support, advanced routing, and modern web development patterns. Explore the code to see these concepts in action!
