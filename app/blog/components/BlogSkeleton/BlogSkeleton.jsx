// app/blog/components/BlogSkeleton/BlogSkeleton.jsx
"use client";

export default function BlogSkeleton({ layoutMode }) {
  const getGridClass = () => {
    switch (layoutMode) {
      case 1: return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";
      case 2: return "grid grid-cols-1 gap-6";
      case 3: return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4";
      default: return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <div className="h-12 bg-muted rounded w-32 mx-auto mb-4 animate-pulse"></div>
          <div className="h-4 bg-muted rounded w-48 mx-auto animate-pulse"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-10 bg-muted rounded-full w-20 animate-pulse"></div>)}
        </div>
        <div className="flex flex-wrap gap-2">
          {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="h-8 bg-muted rounded-full w-16 animate-pulse"></div>)}
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className={getGridClass()}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-background border border-border rounded-lg p-6 animate-pulse">
              <div className="h-4 bg-muted rounded w-16 mb-4"></div>
              <div className="h-6 bg-muted rounded w-3/4 mb-3"></div>
              <div className="space-y-2 mb-4">
                <div className="h-4 bg-muted rounded w-full"></div>
                <div className="h-4 bg-muted rounded w-2/3"></div>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-border">
                <div className="h-3 bg-muted rounded w-16"></div>
                <div className="flex gap-1">
                  <div className="h-6 bg-muted rounded w-12"></div>
                  <div className="h-6 bg-muted rounded w-12"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}