// app/blog/components/BlogHero/BlogHero.jsx
"use client";
import { motion } from 'framer-motion';

export default function BlogHero() {
  return (
    <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden">
      <div className="text-center z-10 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold text-foreground mb-4"
        >
          My Blog
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
        >
          Thoughts, tutorials, and insights on web development and design
        </motion.p>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
    </section>
  );
}