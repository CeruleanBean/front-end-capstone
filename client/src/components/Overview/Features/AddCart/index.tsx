import React from 'react';
import CartForm from './CartForm';

function AddCart() {
  const formSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted');
  }
  return (
    <div className="cart-form-container">
      <CartForm handleSubmit={formSubmit} />
    </div>
  );
}

export default AddCart;
