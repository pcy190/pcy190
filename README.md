# ret2happy's Blog - Security Research

This project is my personal academic blog built with Next.js and Tailwind CSS, showcasing research and insights in computer and blockchain security.

## Features

- Modern, responsive design with academic aesthetics
- Dark mode support
- Blog system with MDX content
- Showcases research highlights and publications
- Contact form for professional inquiries

## Tech Stack

- [Next.js 15](https://nextjs.org/) - React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [MDX](https://mdxjs.com/) - Markdown for the component era
- [React Icons](https://react-icons.github.io/react-icons/) - Popular icons in React
- [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) - Load MDX content from arbitrary sources

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/academic-blog.git
cd academic-blog
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Writing Blog Posts

Blog posts are written in MDX and stored in the `src/content/blog` directory.

### Creating a New Post

1. Create a new `.mdx` file in the `src/content/blog` directory with the following frontmatter:

```mdx
---
title: 'Your Post Title'
date: 'YYYY-MM-DD'
excerpt: 'A brief summary of the post'
tags: ['Tag1', 'Tag2']
author: 'Your Name'
---

# Your Post Title

Your content here...
```

2. Write your content using Markdown syntax.

3. The post will automatically appear in the blog list page and as a standalone page.

## Deployment to Vercel

### Setting Up Vercel

1. Create an account on [Vercel](https://vercel.com/) if you don't have one.

2. Install Vercel CLI (optional)
```bash
npm install -g vercel
```

### Deploying

#### Option 1: Using Vercel CLI

1. Run the following command in your project directory:
```bash
vercel
```

2. Follow the prompts to link to your Vercel account and project.

#### Option 2: Using Vercel Dashboard

1. Push your code to a GitHub, GitLab, or Bitbucket repository.

2. Import your repository in the Vercel dashboard:
   - Go to [vercel.com/new](https://vercel.com/new)
   - Select your repository
   - Vercel will detect Next.js and apply optimal settings automatically
   - Click "Deploy"

3. Your site will be deployed to a URL like `your-project.vercel.app`.

### Custom Domain (Optional)

1. In your Vercel dashboard, go to your project settings.

2. Under the "Domains" section, add your custom domain.

3. Follow the instructions to configure DNS settings.

## Customization

- Update site metadata in `src/app/layout.tsx`
- Modify color schemes in `src/app/globals.css`
- Update components in the `src/components` directory

## License

This project is licensed under the MIT License - see the LICENSE file for details.
