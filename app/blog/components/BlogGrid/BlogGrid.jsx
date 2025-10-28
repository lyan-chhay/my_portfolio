// app/blog/components/BlogGrid/BlogGrid.jsx
"use client";
import { motion, AnimatePresence } from 'framer-motion';
import BlogCard from '../BlogCard/BlogCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function BlogGrid({ layoutMode, filteredPosts, currentPage, itemsPerPage }) {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  const getGridClass = () => {
    switch (layoutMode) {
      case 1: return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";
      case 2: return "grid grid-cols-1 gap-6";
      case 3: return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4";
      default: return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div key={`${layoutMode}-${currentPage}`} variants={containerVariants} initial="hidden" animate="visible" className={getGridClass()}>
        {currentPosts.map((post, index) => (
          <motion.div key={post.id} variants={itemVariants} layout>
            <BlogCard post={post} layoutMode={layoutMode} index={index} />
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}