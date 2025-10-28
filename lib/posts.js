// lib/posts.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

// Fallback data in case content directory doesn't exist yet
const FALLBACK_POSTS = [
  {
    id: 1,
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js 14",
    excerpt: "Learn how to build modern web applications with Next.js 14 and React Server Components.",
    content: "# Getting Started with Next.js 14\n\nWelcome to this comprehensive guide...",
    category: "web-dev",
    tags: ["React", "Next.js", "JavaScript"],
    date: "2024-01-15",
    readTime: "5 min read",
    published: true,
    toc: [
      { id: "introduction", title: "Introduction", level: 2 },
      { id: "server-components", title: "Server Components", level: 2 },
      { id: "what-are-server-components", title: "What are Server Components?", level: 3 }
    ]
  },
  {
    id: 2,
    slug: "modern-css-techniques",
    title: "Modern CSS Techniques You Should Know",
    excerpt: "Explore cutting-edge CSS features that will level up your styling game.",
    content: "# Modern CSS Techniques\n\nCSS has evolved significantly...",
    category: "web-dev",
    tags: ["CSS", "Design", "UI/UX"],
    date: "2024-01-10",
    readTime: "8 min read",
    published: true,
    toc: [
      { id: "introduction", title: "Introduction", level: 2 },
      { id: "css-grid", title: "CSS Grid", level: 2 },
      { id: "flexbox", title: "Flexbox", level: 2 }
    ]
  },
  {
    id: 3,
    slug: "building-responsive-layouts",
    title: "Building Responsive Layouts with Tailwind CSS",
    excerpt: "Master the art of creating responsive designs that work on all devices.",
    content: "# Building Responsive Layouts\n\nResponsive design is essential...",
    category: "design",
    tags: ["CSS", "Tailwind", "Responsive"],
    date: "2024-01-05",
    readTime: "6 min read",
    published: true,
    toc: [
      { id: "introduction", title: "Introduction", level: 2 },
      { id: "mobile-first", title: "Mobile First Approach", level: 2 },
      { id: "breakpoints", title: "Breakpoints", level: 3 }
    ]
  }
];

export function getAllPosts() {
  try {
    // Check if content directory exists
    if (!fs.existsSync(postsDirectory)) {
      console.log('Content directory not found, using fallback data');
      return FALLBACK_POSTS;
    }

    const fileNames = fs.readdirSync(postsDirectory);
    
    const allPostsData = fileNames.map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      
      try {
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        const toc = getTOCFromContent(content);

        return {
          slug,
          ...data,
          content,
          toc,
        };
      } catch (error) {
        console.error(`Error reading file ${fileName}:`, error);
        return null;
      }
    }).filter(Boolean); // Remove null values

    return allPostsData
      .filter(post => post.published !== false)
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  } catch (error) {
    console.error('Error in getAllPosts:', error);
    return FALLBACK_POSTS;
  }
}

export function getPostBySlug(slug) {
  try {
    // First check if we're using fallback data
    const fallbackPost = FALLBACK_POSTS.find(post => post.slug === slug);
    
    // Check if content directory exists
    if (!fs.existsSync(postsDirectory)) {
      return fallbackPost || null;
    }

    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    
    // If file doesn't exist, return fallback or null
    if (!fs.existsSync(fullPath)) {
      return fallbackPost || null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const toc = getTOCFromContent(content);

    return {
      slug,
      ...data,
      content,
      toc,
    };
  } catch (error) {
    console.error(`Error in getPostBySlug for slug ${slug}:`, error);
    
    // Return fallback post if available
    const fallbackPost = FALLBACK_POSTS.find(post => post.slug === slug);
    return fallbackPost || null;
  }
}

export function getAllSlugs() {
  try {
    if (!fs.existsSync(postsDirectory)) {
      return FALLBACK_POSTS.map(post => ({ slug: post.slug }));
    }

    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => ({
      slug: fileName.replace(/\.mdx?$/, ''),
    }));
  } catch (error) {
    console.error('Error in getAllSlugs:', error);
    return FALLBACK_POSTS.map(post => ({ slug: post.slug }));
  }
}

function getTOCFromContent(content) {
  try {
    const headingRegex = /^(#{2,3})\s+(.+)$/gm;
    const headings = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length;
      const title = match[2].trim();
      const id = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

      headings.push({
        id,
        title,
        level,
      });
    }

    return headings;
  } catch (error) {
    console.error('Error in getTOCFromContent:', error);
    return [];
  }
}