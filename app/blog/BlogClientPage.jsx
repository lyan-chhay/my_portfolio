// app/blog/BlogClientPage.jsx
"use client";
import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import FixedButton from '@/components/FixedButton';
import Button from '@/components/Button';
import Hr from '@/components/Hr';
import BlogGrid from './components/BlogGrid/BlogGrid';
import BlogFilter from './components/BlogFilter/BlogFilter';
import Pagination from './components/Pagination/Pagination';
import BlogSkeleton from './components/BlogSkeleton/BlogSkeleton';

export default function BlogClientPage({ allPosts }) {
  const [layoutMode, setLayoutMode] = useState(1);
  const [category, setCategory] = useState('all');
  const [selectedTags, setSelectedTags] = useState([]);
  const [sortBy, setSortBy] = useState('newest');
  const [mounted, setMounted] = useState(false);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => setMounted(true), []);

  const filteredAndSortedPosts = useMemo(() => {
    let filtered = allPosts.filter(post => {
      const matchesCategory = category === 'all' || post.category === category;
      const matchesTags = selectedTags.length === 0 || 
        selectedTags.some(tag => post.tags.includes(tag));
      return matchesCategory && matchesTags;
    });

    switch (sortBy) {
      case 'newest': return filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
      case 'oldest': return filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
      case 'name-asc': return filtered.sort((a, b) => a.title.localeCompare(b.title));
      case 'name-desc': return filtered.sort((a, b) => b.title.localeCompare(a.title));
      default: return filtered;
    }
  }, [allPosts, category, selectedTags, sortBy]);

  useEffect(() => setTotalItems(filteredAndSortedPosts.length), [filteredAndSortedPosts.length]);
  useEffect(() => setCurrentPage(1), [category, selectedTags, sortBy]);

  const handleLayoutChange = useCallback((layout) => setLayoutMode(layout), []);
  const handleCategoryChange = useCallback((cat) => setCategory(cat), []);
  const handleTagsChange = useCallback((tags) => setSelectedTags(tags), []);
  const handleSortChange = useCallback((sortOption) => setSortBy(sortOption), []);
  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  const handleItemsPerPageChange = useCallback((newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  }, []);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (!mounted) return <BlogSkeleton layoutMode={layoutMode} />;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <FixedButton href="/">← Back</FixedButton>
      
      <motion.header initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-light text-foreground mb-4 tracking-tight">Blog</h1>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">Thoughts and insights on development</p>
          <p className="text-muted-foreground text-sm mt-2">{allPosts.length} articles available</p>
        </div>
      </motion.header>

      <section className="container mx-auto px-4 pb-16">
        <BlogFilter 
          onCategoryChange={handleCategoryChange}
          onTagsChange={handleTagsChange}
          onLayoutChange={handleLayoutChange}
          onSortChange={handleSortChange}
          currentLayout={layoutMode}
          hasContent={allPosts.length > 0}
          allPosts={allPosts}
        />
        
        <div className="my-8"><Hr /></div>

        <BlogGrid 
          layoutMode={layoutMode}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          filteredPosts={filteredAndSortedPosts}
        />

        {filteredAndSortedPosts.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            itemsPerPage={itemsPerPage}
            totalItems={totalItems}
            onItemsPerPageChange={handleItemsPerPageChange}
            showItemsPerPage={true}
            showPageInfo={true}
          />
        )}

        {filteredAndSortedPosts.length === 0 && (
          <div className="text-center py-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-md mx-auto">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-light text-foreground mb-4">No posts found</h3>
              <p className="text-muted-foreground mb-6">Try adjusting your filters</p>
              <Button variation="outline" onClick={() => { setCategory('all'); setSelectedTags([]); setSortBy('newest'); }}>
                Clear All Filters
              </Button>
            </motion.div>
          </div>
        )}
      </section>
    </div>
  );
}