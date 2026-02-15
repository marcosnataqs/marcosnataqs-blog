# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Architecture

This is an Astro 5 static blog with the following structure:

- **Content Collections**: Uses the Astro 5 `glob` loader pattern (not the legacy `getCollection` with file-based routing)
  - Blog posts: `src/content/blog/*.md`
  - Schema defined in `src/content.config.ts`

- **Layouts**: `src/layouts/`
  - `BaseLayout.astro` - Main HTML shell with Header/Footer
  - `BlogPostLayout.astro` - Wrapper for blog post content

- **Pages**: `src/pages/`
  - `index.astro` - Homepage with recent posts
  - `blog/index.astro` - Blog listing
  - `blog/[slug].astro` - Dynamic blog post pages

- **Components**: `src/components/`
  - `Header.astro`, `Footer.astro`, `PostCard.astro`

## Astro 5 Content Collections Notes

This project uses Astro 5's new content layer API with the `glob` loader:

```typescript
// Use post.id instead of post.slug
params: { slug: post.id }

// Use render() from astro:content instead of post.render()
import { render } from 'astro:content';
const { Content } = await render(post);
```

## Astro Documentation

When you need to look up Astro APIs, features, or troubleshoot issues, use the Astro MCP tool (`mcp__astro-docs__search_astro_docs`) to search the official Astro documentation.

## Styling

- Global styles in `src/styles/global.css`
- Dark theme with CSS variables (--color-bg, --color-text, --color-accent, etc.)
- Component-scoped styles using `<style>` blocks in .astro files
