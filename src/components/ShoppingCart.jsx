import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ShoppingCart.css';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Load cart items when component mounts
    const items = JSON.parse(localStorage.getItem('cartItems')) || [];
    console.log('Cart Items:', items);
    setCartItems(items);
  }, []);

  return (
    <div className="shopping-cart-page">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index} style={{ margin: '10px', padding: '10px', border: '1px solid #ccc' }}>
              <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px' }} />
              <h3>{item.name}</h3>
              <p>Price: {item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          ))}
        </div>
      )}
      <button onClick={() => navigate('/')}>Back to Products</button>
    </div>
  );
};

export default ShoppingCart;