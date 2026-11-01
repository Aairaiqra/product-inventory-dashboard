import React from 'react';
import { IconSearch } from './icons';

function SearchBar({
  searchTerm,
  onSearchChange,
  categories,
  selectedCategory,
  onCategoryChange,
}) {
  return (
    <div className="search-controls">
      <select
        className="category-select"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        aria-label="Filter by category"
      >
        <option value="All">All categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <div className="search-bar">
        <IconSearch className="search-icon" aria-hidden="true" />
        <input
          type="text"
          placeholder="Search by name or category"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          aria-label="Search products"
        />
      </div>
    </div>
  );
}

export default SearchBar;
