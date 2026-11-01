import React, { useState } from 'react';
import { IconPlus } from './icons';

const emptyForm = { name: '', category: '', price: '', quantity: '' };

function AddProductForm({ onAddProduct }) {
  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear the error of the field being edited
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Product name is required.';
    }
    if (!formData.category.trim()) {
      newErrors.category = 'Category is required.';
    }

    if (formData.price === '') {
      newErrors.price = 'Price is required.';
    } else if (Number(formData.price) < 0) {
      newErrors.price = 'Price cannot be negative.';
    }

    if (formData.quantity === '') {
      newErrors.quantity = 'Quantity is required.';
    } else if (Number(formData.quantity) < 0) {
      newErrors.quantity = 'Quantity cannot be negative.';
    } else if (!Number.isInteger(Number(formData.quantity))) {
      newErrors.quantity = 'Quantity must be a whole number.';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    onAddProduct({
      name: formData.name.trim(),
      category: formData.category.trim(),
      price: parseFloat(formData.price),
      quantity: parseInt(formData.quantity, 10),
    });

    setFormData(emptyForm);
    setErrors({});
  };

  return (
    <form className="add-product-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <label className="field">
          <span>Product name</span>
          <input
            type="text"
            name="name"
            placeholder="e.g. Wireless Mouse"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'input-error' : ''}
          />
          {errors.name && <small className="error-text">{errors.name}</small>}
        </label>
        <label className="field">
          <span>Category</span>
          <input
            type="text"
            name="category"
            placeholder="e.g. Electronics"
            value={formData.category}
            onChange={handleChange}
            className={errors.category ? 'input-error' : ''}
          />
          {errors.category && <small className="error-text">{errors.category}</small>}
        </label>
        <label className="field field-narrow">
          <span>Price</span>
          <input
            type="number"
            name="price"
            placeholder="0.00"
            value={formData.price}
            onChange={handleChange}
            step="0.01"
            min="0"
            className={errors.price ? 'input-error' : ''}
          />
          {errors.price && <small className="error-text">{errors.price}</small>}
        </label>
        <label className="field field-narrow">
          <span>Quantity</span>
          <input
            type="number"
            name="quantity"
            placeholder="0"
            value={formData.quantity}
            onChange={handleChange}
            min="0"
            step="1"
            className={errors.quantity ? 'input-error' : ''}
          />
          {errors.quantity && <small className="error-text">{errors.quantity}</small>}
        </label>
      </div>
      <button type="submit" className="add-btn">
        <IconPlus />
        <span>Add product</span>
      </button>
    </form>
  );
}

export default AddProductForm;
