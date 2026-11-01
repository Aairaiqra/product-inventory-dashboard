import React from 'react';
import ProductCard from './ProductCard';
import { IconEmptyBox } from './icons';

function ProductList({ products, onDeleteProduct }) {
  if (products.length === 0) {
    return (
      <div className="empty-state">
        <IconEmptyBox className="empty-icon" />
        <p>No products match your search.</p>
      </div>
    );
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onDelete={onDeleteProduct} />
      ))}
    </div>
  );
}

export default ProductList;
