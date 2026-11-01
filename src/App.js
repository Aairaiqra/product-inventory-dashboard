import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import AddProductForm from './components/AddProductForm';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Wireless Mouse', category: 'Electronics', price: 25.99, quantity: 50 },
    { id: 2, name: 'Office Chair', category: 'Furniture', price: 120.00, quantity: 15 },
    { id: 3, name: 'Notebook', category: 'Stationery', price: 2.50, quantity: 200 },
    { id: 4, name: 'Bluetooth Speaker', category: 'Electronics', price: 45.00, quantity: 30 },
    { id: 5, name: 'Desk Lamp', category: 'Furniture', price: 18.75, quantity: 40 },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const addProduct = (newProduct) => {
    const productWithId = {
      ...newProduct,
      id: products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1,
    };
    setProducts([...products, productWithId]);
  };

  const deleteProduct = (id) => {
    const product = products.find((p) => p.id === id);
    if (!window.confirm(`Delete "${product.name}"? This cannot be undone.`)) {
      return;
    }
    setProducts(products.filter((p) => p.id !== id));
  };

  // Unique category list for the dropdown (case-insensitive, first spelling wins)
  const categories = [];
  products.forEach((p) => {
    const cat = p.category.trim();
    if (!categories.some((c) => c.toLowerCase() === cat.toLowerCase())) {
      categories.push(cat);
    }
  });
  categories.sort((a, b) => a.localeCompare(b));

  // If the selected category no longer exists (e.g. its last product was deleted), fall back to All
  const activeCategory = categories.some(
    (c) => c.toLowerCase() === selectedCategory.toLowerCase()
  )
    ? selectedCategory
    : 'All';

  const totalValue = products.reduce((sum, p) => sum + p.price * p.quantity, 0);

  const filteredProducts = products.filter((product) => {
    const term = searchTerm.trim().toLowerCase();
    const matchesSearch =
      product.name.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term);
    const matchesCategory =
      activeCategory === 'All' ||
      product.category.trim().toLowerCase() === activeCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="App">
      <Navbar
        totalProducts={products.length}
        filteredCount={filteredProducts.length}
        totalValue={totalValue}
      />

      <section className="hero">
        <h1>
          PRODUCT &amp; INVENTORY <span className="accent">DASHBOARD</span>
        </h1>
        <p>Track stock, add new items, and find what you need in seconds.</p>
      </section>

      <main className="container">
        <section className="panel">
          <h2>
            ADD A <span className="accent">PRODUCT</span>
          </h2>
          <AddProductForm onAddProduct={addProduct} />
        </section>

        <section className="catalog-section">
          <div className="catalog-header">
            <h2>
              YOUR <span className="accent">CATALOG</span>
            </h2>
            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              categories={categories}
              selectedCategory={activeCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>
          <ProductList products={filteredProducts} onDeleteProduct={deleteProduct} />
        </section>
      </main>
    </div>
  );
}

export default App;
