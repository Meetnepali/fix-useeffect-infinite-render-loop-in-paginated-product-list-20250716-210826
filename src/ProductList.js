import React, { useState } from "react";

const mockProducts = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  name: `Product #${i + 1}`
}));

const PAGE_SIZE = 6;

export default function ProductList() {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(mockProducts.length / PAGE_SIZE);
  const start = (page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {mockProducts.slice(start, end).map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
      <div className="pagination">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          data-testid="prev-page"
        >
          Previous
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
          data-testid="next-page"
        >
          Next
        </button>
      </div>
    </div>
  );
}
