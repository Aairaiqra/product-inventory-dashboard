import React from 'react';
import { IconTrash } from './icons';

const LOW_STOCK_THRESHOLD = 20;

function ProductCard({ product, onDelete }) {
  const isLowStock = product.quantity < LOW_STOCK_THRESHOLD;

  return (
    <div className="product-card">
      <button
        type="button"
        className="delete-btn"
        onClick={() => onDelete(product.id)}
        aria-label={`Delete ${product.name}`}
      >
        <IconTrash />
      </button>

      <div className="product-card-top">
        <span className="category-tag">
          <span className="category-dot" />
          {product.category}
        </span>
        {isLowStock && <span className="stock-flag">Low stock</span>}
      </div>

      <h3>{product.name}</h3>

      <div className="product-card-meta">
        <span className="price">${product.price.toFixed(2)}</span>
        <span className="quantity">{product.quantity} in stock</span>
      </div>
    </div>
  );
}

export default ProductCard;
