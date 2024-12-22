import React from "react";

const Pagination = ({ totalPages: total, currentPage, onPageChange }) => {
  const totalPages = Math.min(total, 500);

  // Function to calculate the visible pages
  const getPageRange = () => {
    const range = [];
    const maxVisiblePages = 3; // Show 3 pages before and after the current page

    // Always show the first page
    range.push(1);

    // Show the middle range of pages (currentPage - 3, currentPage + 3)
    if (currentPage > maxVisiblePages + 1) {
      range.push("..."); // Add ellipses if there are skipped pages
    }

    // Show a range of pages around the current page
    let start = Math.max(currentPage - maxVisiblePages, 2); // Ensure it doesn't go below 2
    let end = Math.min(currentPage + maxVisiblePages, totalPages - 1); // Ensure it doesn't exceed totalPages

    for (let i = start; i <= end; i++) {
      range.push(i);
    }

    // Add ellipses before last page if necessary
    if (currentPage < totalPages - maxVisiblePages) {
      range.push("...");
    }

    // Always show the last page
    if (totalPages > 1) range.push(totalPages);

    return range;
  };

  const handlePageClick = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
    }
  };

  const pageRange = getPageRange();

  return (
    <div className="flex justify-center items-center space-x-2 mt-4">
      {/* Display Page Numbers */}
      {pageRange.map((page, index) =>
        page === "..." ? (
          <span key={index} className="text-gray-500">
            ...
          </span>
        ) : (
          <button
            key={index}
            className={`px-4 py-2 rounded-lg ${
              page === currentPage
                ? "bg-red-600 text-white"
                : "bg-white text-gray-800 hover:bg-gray-200"
            }`}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </button>
        )
      )}
    </div>
  );
};

export default Pagination;
