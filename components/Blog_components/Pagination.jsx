import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = [];
  const maxPagesToShow = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
  if (endPage - startPage + 1 < maxPagesToShow) {
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }
  for (let i = startPage; i <= endPage; i++) pages.push(i);

  return (
    <div className="flex justify-center mt-12 font-heading">
      <nav className="inline-flex rounded-md shadow-card">
        {/* Previous Button */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`flex items-center justify-center px-4 h-10 rounded-l-md border border-brand-blue transition smooth ${
            currentPage === 1
              ? "text-gray-400 cursor-not-allowed bg-white"
              : "text-brand-blue hover:bg-brand-light"
          }`}
        >
          <ChevronLeft size={16} className="mr-1" /> Previous
        </button>

        {/* Page Numbers */}
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`flex items-center justify-center px-4 h-10 border-y border-brand-blue text-sm font-body transition smooth ${
              currentPage === page
                ? "bg-brand-orange text-white font-bold"
                : "bg-white text-brand-blue hover:bg-brand-light"
            }`}
          >
            {page}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`flex items-center justify-center px-4 h-10 rounded-r-md border border-brand-blue transition smooth ${
            currentPage === totalPages
              ? "text-gray-400 cursor-not-allowed bg-white"
              : "text-brand-blue hover:bg-brand-light hover:text-brand-orange"
          }`}
        >
          Next <ChevronRight size={16} className="ml-1 hover:text-brand-orange" />
        </button>
      </nav>
    </div>
  );
}
