// app/blog/components/TableOfContents.jsx
"use client";
import { useEffect, useState } from 'react';

export default function TableOfContents({ headings }) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '0% 0% -80% 0%', threshold: 0.1 }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => {
      headings.forEach((heading) => {
        const element = document.getElementById(heading.id);
        if (element) observer.unobserve(element);
      });
    };
  }, [headings]);

  const scrollToHeading = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  if (headings.length === 0) return null;

  return (
    <div className="sticky top-8">
      <div className="mb-4 pb-4 border-b border-border">
        <h3 className="text-lg font-semibold text-foreground">On this page</h3>
      </div>
      
      <nav className="space-y-2">
        {headings.map((heading) => (
          <button key={heading.id} onClick={() => scrollToHeading(heading.id)} className={`block w-full text-left text-sm transition-all duration-200 hover:text-foreground ${heading.level === 3 ? 'pl-4' : ''} ${activeId === heading.id ? 'text-primary font-medium' : 'text-muted-foreground'}`} style={{ paddingLeft: `${(heading.level - 2) * 12}px` }}>
            {heading.title}
          </button>
        ))}
      </nav>

      <div className="mt-6 pt-6 border-t border-border">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Reading progress</span>
          <span>{Math.round((headings.findIndex(h => h.id === activeId) + 1) / headings.length * 100)}%</span>
        </div>
        <div className="mt-2 w-full bg-muted rounded-full h-1">
          <div className="bg-primary h-1 rounded-full transition-all duration-300" style={{ width: `${((headings.findIndex(h => h.id === activeId) + 1) / headings.length) * 100}%` }} />
        </div>
      </div>
    </div>
  );
}