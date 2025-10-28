// app/blog/components/Pagination/Pagination.jsx
"use client";
import Button from '@/components/Button';

export default function Pagination({ currentPage, totalPages, onPageChange, itemsPerPage, totalItems, onItemsPerPageChange, showItemsPerPage = true, showPageInfo = true }) {
  const getPageNumbers = () => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);

    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) range.push(i);

    if (currentPage - delta > 2) rangeWithDots.push(1, '...');
    else rangeWithDots.push(1);

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) rangeWithDots.push('...', totalPages);
    else rangeWithDots.push(totalPages);

    return rangeWithDots;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-border">
      {showPageInfo && <div className="text-sm text-muted-foreground">Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} posts</div>}

      <div className="flex items-center gap-1">
        <Button variation="outline" size="sm" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</Button>

        {getPageNumbers().map((page, index) => (
          <button key={index} onClick={() => typeof page === 'number' && onPageChange(page)} className={`min-w-[40px] h-10 rounded-md text-sm font-medium transition-colors ${page === currentPage ? 'bg-primary text-primary-foreground' : page === '...' ? 'text-muted-foreground cursor-default' : 'text-foreground hover:bg-muted'}`} disabled={page === '...'}>
            {page}
          </button>
        ))}

        <Button variation="outline" size="sm" onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</Button>
      </div>

      {showItemsPerPage && (
        <div className="flex items-center gap-2 text-sm">
          <span className="text-muted-foreground">Show:</span>
          <select value={itemsPerPage} onChange={(e) => onItemsPerPageChange(Number(e.target.value))} className="bg-background border border-border rounded-md px-2 py-1 text-foreground">
            <option value={6}>6</option>
            <option value={9}>9</option>
            <option value={12}>12</option>
            <option value={18}>18</option>
          </select>
        </div>
      )}
    </div>
  );
}