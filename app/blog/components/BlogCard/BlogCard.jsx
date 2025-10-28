// app/blog/components/BlogCard/BlogCard.jsx
"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BlogCard({ post, layoutMode, index }) {
  const getCardClass = () => {
    switch (layoutMode) {
      case 1: return "bg-background border border-border rounded-lg hover:shadow-lg transition-all duration-300 h-full flex flex-col group";
      case 2: return "bg-background border border-border rounded-lg hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row h-full group";
      case 3: return "bg-background border border-border rounded-lg hover:shadow-md transition-all duration-300 h-full flex flex-col group";
      default: return "bg-background border border-border rounded-lg hover:shadow-lg transition-all duration-300 h-full flex flex-col group";
    }
  };

  const getContentClass = () => {
    switch (layoutMode) {
      case 1: return "p-6 flex-1 flex flex-col";
      case 2: return "p-6 flex-1";
      case 3: return "p-4 flex-1 flex flex-col";
      default: return "p-6 flex-1 flex flex-col";
    }
  };

  return (
    <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className={getCardClass()}>
      <div className="p-4 pb-0">
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{post.category}</span>
      </div>
      
      <div className={getContentClass()}>
        <div className="flex-1">
          <h3 className={`font-normal text-foreground mb-3 leading-tight ${layoutMode === 3 ? 'text-base' : 'text-xl'} group-hover:text-primary transition-colors`}>
            <Link href={`/blog/${post.slug}`} className="hover:no-underline">{post.title}</Link>
          </h3>
          <p className={`text-muted-foreground leading-relaxed ${layoutMode === 3 ? 'text-sm line-clamp-2' : 'line-clamp-3'}`}>{post.excerpt}</p>
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
          <div className="text-sm text-muted-foreground">{post.date}</div>
          <div className="flex gap-1">
            {post.tags.slice(0, layoutMode === 3 ? 1 : 2).map(tag => (
              <span key={tag} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}