// app/blog/[slug]/BlogPostClient.jsx
"use client";
import { useState, useEffect } from 'react';
import TableOfContents from '../components/TableOfContents';
import MDXContent from './MDXContent';

export default function BlogPostClient({ post }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Add IDs to headings for TOC
  const contentWithIds = post.content.replace(/^(##+)\s+(.+)$/gm, (match, hashes, title) => {
    const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    return `${hashes} ${title} {#${id}}`;
  });

  return (
    <article className="min-h-screen bg-background">
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <a href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">← Back to Blog</a>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content - 2/3 width */}
          <div className="lg:w-2/3">
            {/* Article Header */}
            <header className="mb-12">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <span>•</span>
                <span>{post.readTime}</span>
                <span>•</span>
                <span className="capitalize px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                  {post.category}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                {post.title}
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {post.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-muted text-foreground text-sm rounded-full border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            {/* Article Content - Now using the server component */}
            <MDXContent content={contentWithIds} />

            {/* Article Footer */}
            <footer className="mt-16 pt-8 border-t border-border">
              <div className="flex justify-between items-center">
                <a 
                  href="/blog" 
                  className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  ← Back to Blog
                </a>
                
                <div className="text-sm text-muted-foreground">
                  Thanks for reading!
                </div>
              </div>
            </footer>
          </div>

          {/* Table of Contents Sidebar - 1/3 width */}
          <aside className="lg:w-1/3">
            <div className="sticky top-24">
              {isMounted && post.toc && post.toc.length > 0 && (
                <TableOfContents headings={post.toc} />
              )}
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}