// app/blog/components/BlogFilter/BlogFilter.jsx
"use client";
import { useState, useRef, useEffect } from 'react';

const CATEGORIES = [
  { id: 'all', name: 'All Posts', color: 'bg-gray-500' },
  { id: 'web-dev', name: 'Development', color: 'bg-blue-500' },
  { id: 'design', name: 'Design', color: 'bg-purple-500' },
  { id: 'tutorial', name: 'Tutorials', color: 'bg-green-500' },
  { id: 'thoughts', name: 'Thoughts', color: 'bg-orange-500' }
];

const TAGS = ['React', 'Next.js', 'JavaScript', 'CSS', 'UI/UX', 'TypeScript', 'Performance', 'Tailwind'];

const SORT_OPTIONS = [
  { id: 'newest', name: 'Newest First', icon: '🆕' },
  { id: 'oldest', name: 'Oldest First', icon: '🕐' },
  { id: 'name-asc', name: 'Name A-Z', icon: '🔤' },
  { id: 'name-desc', name: 'Name Z-A', icon: '⤵️' }
];

const FilterIcons = {
  sort: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" /></svg>,
  tags: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>,
  chevron: <svg className="w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>,
  close: <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
};

const LAYOUT_OPTIONS = [
  { id: 1, name: 'Grid', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg> },
  { id: 2, name: 'List', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg> },
  { id: 3, name: 'Compact', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg> }
];

export default function BlogFilter({ onCategoryChange, onTagsChange, onLayoutChange, onSortChange, currentLayout, hasContent, allPosts = [] }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTags, setSelectedTags] = useState([]);
  const [sortBy, setSortBy] = useState('newest');
  const [tagsDropdownOpen, setTagsDropdownOpen] = useState(false);
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setTagsDropdownOpen(false);
        setSortDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    onCategoryChange(categoryId);
  };

  const handleTagToggle = (tag) => {
    const newTags = selectedTags.includes(tag) ? selectedTags.filter(t => t !== tag) : [...selectedTags, tag];
    setSelectedTags(newTags);
    onTagsChange(newTags);
  };

  const handleSortChange = (sortOption) => {
    setSortBy(sortOption);
    onSortChange(sortOption);
    setSortDropdownOpen(false);
  };

  const clearAllFilters = () => {
    setSelectedCategory('all');
    setSelectedTags([]);
    setSortBy('newest');
    onCategoryChange('all');
    onTagsChange([]);
    onSortChange('newest');
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedTags.length > 0 || sortBy !== 'newest';

  if (!hasContent) return null;

  return (
    <div className="bg-background" ref={dropdownRef}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
          <div>
            <h2 className="text-2xl font-light text-foreground mb-2">Browse Articles</h2>
            <p className="text-muted-foreground text-sm">{allPosts.length} articles available</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <button onClick={() => setSortDropdownOpen(!sortDropdownOpen)} className="flex items-center gap-2 px-4 py-2.5 text-sm text-foreground bg-card border border-border rounded-xl hover:border-foreground/30 transition-all duration-200 hover:shadow-sm group">
                {FilterIcons.sort}
                <span className="min-w-[80px] text-left">{SORT_OPTIONS.find(opt => opt.id === sortBy)?.name}</span>
                <div className={`transition-transform ${sortDropdownOpen ? 'rotate-180' : ''}`}>{FilterIcons.chevron}</div>
              </button>
              {sortDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 bg-card border border-border rounded-xl shadow-lg z-20 py-2 backdrop-blur-sm">
                  {SORT_OPTIONS.map(option => (
                    <button key={option.id} onClick={() => handleSortChange(option.id)} className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-all duration-200 ${sortBy === option.id ? 'bg-primary/10 text-primary border-r-2 border-primary' : 'text-foreground hover:bg-muted/50'}`}>
                      <span className="text-base">{option.icon}</span>
                      <span>{option.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="relative">
              <button onClick={() => setTagsDropdownOpen(!tagsDropdownOpen)} className="flex items-center gap-2 px-4 py-2.5 text-sm text-foreground bg-card border border-border rounded-xl hover:border-foreground/30 transition-all duration-200 hover:shadow-sm group">
                {FilterIcons.tags}
                <span>Tags</span>
                {selectedTags.length > 0 && <span className="bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">{selectedTags.length}</span>}
                <div className={`transition-transform ${tagsDropdownOpen ? 'rotate-180' : ''}`}>{FilterIcons.chevron}</div>
              </button>
              {tagsDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-72 bg-card border border-border rounded-xl shadow-lg z-20 max-h-80 overflow-y-auto backdrop-blur-sm">
                  <div className="p-4 border-b border-border">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-sm font-medium text-foreground">Filter by Tags</h3>
                      {selectedTags.length > 0 && <button onClick={() => { setSelectedTags([]); onTagsChange([]); }} className="text-xs text-muted-foreground hover:text-foreground transition-colors">Clear all</button>}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {TAGS.map(tag => (
                        <button key={tag} onClick={() => handleTagToggle(tag)} className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 border ${selectedTags.includes(tag) ? 'bg-primary text-primary-foreground border-primary shadow-sm' : 'bg-background text-foreground border-border hover:border-foreground/50 hover:shadow-sm'}`}>
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center gap-1 bg-card rounded-xl p-1.5 border border-border">
              {LAYOUT_OPTIONS.map(option => (
                <button key={option.id} onClick={() => onLayoutChange(option.id)} className={`p-2 rounded-lg transition-all duration-200 ${currentLayout === option.id ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'}`} title={option.name}>
                  {option.icon}
                </button>
              ))}
            </div>

            {hasActiveFilters && (
              <button onClick={clearAllFilters} className="flex items-center gap-2 px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors border border-transparent hover:border-border rounded-xl">
                {FilterIcons.close}
                Clear All
              </button>
            )}
          </div>
        </div>

        <div className="mb-6">
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map(category => (
              <button key={category.id} onClick={() => handleCategorySelect(category.id)} className={`group relative px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 border ${selectedCategory === category.id ? 'bg-foreground text-background border-foreground shadow-lg transform scale-105' : 'bg-card text-foreground border-border hover:border-foreground/50 hover:shadow-md hover:transform hover:scale-105'}`}>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${category.color} ${selectedCategory === category.id ? 'bg-background' : ''}`}></div>
                  {category.name}
                </div>
                {selectedCategory !== category.id && <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>}
              </button>
            ))}
          </div>
        </div>

        {hasActiveFilters && (
          <div className="flex items-center gap-4 p-4 bg-card/50 border border-border rounded-xl">
            <span className="text-sm font-medium text-foreground">Active filters:</span>
            <div className="flex flex-wrap gap-2">
              {selectedCategory !== 'all' && (
                <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-sm border border-primary/20">
                  <span>Category: {CATEGORIES.find(cat => cat.id === selectedCategory)?.name}</span>
                  <button onClick={() => handleCategorySelect('all')} className="hover:text-primary/70 transition-colors">{FilterIcons.close}</button>
                </div>
              )}
              {selectedTags.map(tag => (
                <div key={tag} className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-sm border border-primary/20">
                  <span>{tag}</span>
                  <button onClick={() => handleTagToggle(tag)} className="hover:text-primary/70 transition-colors">{FilterIcons.close}</button>
                </div>
              ))}
              {sortBy !== 'newest' && (
                <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 text-blue-600 rounded-lg text-sm border border-blue-500/20">
                  <span>Sort: {SORT_OPTIONS.find(opt => opt.id === sortBy)?.name}</span>
                  <button onClick={() => handleSortChange('newest')} className="hover:text-blue-600/70 transition-colors">{FilterIcons.close}</button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="border-b border-border/50"></div>
    </div>
  );
}