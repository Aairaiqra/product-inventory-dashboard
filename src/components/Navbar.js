import React from 'react';
import { IconBox } from './icons';

function Navbar({ totalProducts, filteredCount, totalValue }) {
  const isFiltered = filteredCount !== totalProducts;

  return (
    <header className="navbar">
      <div className="navbar-brand">
        <span className="navbar-mark">
          <IconBox />
        </span>
        <span className="navbar-word">Inventory</span>
      </div>
      <div className="navbar-stats">
        <span className="stat-chip">{totalProducts} in catalog</span>
        <span className="stat-chip">
          ${totalValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} total value
        </span>
        {isFiltered && (
          <span className="stat-chip stat-chip-accent">{filteredCount} matching</span>
        )}
      </div>
    </header>
  );
}

export default Navbar;
