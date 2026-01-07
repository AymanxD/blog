# Blog

A server-side rendered blog built with Astro and managed with Nx monorepo.

## Project Structure

This project uses Nx for monorepo management with the following structure:

```
blog/
├── apps/
│   └── blog/          # Astro SSR blog application
├── nx.json            # Nx configuration
└── package.json       # Root package.json
```

## Prerequisites

- Node.js 18+
- pnpm 8+

## Getting Started

### Installation

```bash
# Install all dependencies (root and workspace packages)
pnpm install
```

### Development

```bash
# Run the blog in development mode
pnpm nx dev blog

# Or using pnpm filter
pnpm --filter @blog/blog dev
```

The development server will start at `http://localhost:4321`.

### Build

```bash
# Build the blog for production
pnpm nx build blog

# Or using pnpm filter
pnpm --filter @blog/blog build
```

### Preview Production Build

```bash
# Preview the production build
pnpm nx preview blog
```

## Configuration

### Environment Variables

Create a `.env` file in the `apps/blog` directory based on `.env.example`:

```bash
cp apps/blog/.env.example apps/blog/.env
```

Available environment variables:

- `PUBLIC_API_URL`: The URL of the backend API that serves blog content (default: `http://localhost:3001/api`)

### Backend API

This blog fetches content from an external backend API. The API should implement the following endpoints:

- `GET /api/posts` - List all posts (supports `page`, `pageSize`, and `tag` query parameters)
- `GET /api/posts/:slug` - Get a single post by slug

Expected response format for posts list:

```json
{
  "posts": [
    {
      "id": "string",
      "title": "string",
      "slug": "string",
      "content": "string (HTML)",
      "excerpt": "string",
      "author": {
        "id": "string",
        "name": "string",
        "avatar": "string (optional)",
        "bio": "string (optional)"
      },
      "publishedAt": "string (ISO date)",
      "updatedAt": "string (ISO date, optional)",
      "tags": ["string"],
      "coverImage": "string (optional)"
    }
  ],
  "total": 0,
  "page": 1,
  "pageSize": 10
}
```

## Features

- Server-side rendering with Astro
- Dynamic routing for blog posts
- Tag-based filtering
- Pagination support
- Responsive design
- SEO-friendly

## Tech Stack

- [Astro](https://astro.build/) - Web framework with SSR support
- [Nx](https://nx.dev/) - Monorepo management
- [@astrojs/node](https://docs.astro.build/en/guides/integrations-guide/node/) - Node.js adapter for SSR
