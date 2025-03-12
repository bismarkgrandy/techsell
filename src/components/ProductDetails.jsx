import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import './ProductDetails.css';
import ProfilePopup from './ProfilePopup';

const ProductDetails = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const product = JSON.parse(localStorage.getItem('selectedProduct'));
  const [showProfile, setShowProfile] = useState(false);

  const relatedProducts = [
    {
      id: 1,
      name: "Premium Watch",
      price: "$199.99",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
    },
    {
      id: 2,
      name: "Leather Wallet",
      price: "$49.99",
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500"
    },
    {
      id: 3,
      name: "Sunglasses",
      price: "$89.99",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500"
    },
    {
      id: 4,
      name: "Smart Watch",
      price: "$299.99",
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500"
    },
    {
      id: 5,
      name: "Wireless Earbuds",
      price: "$159.99",
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500"
    }
  ];

  const handleAddToCart = () => {
    try {
      const cartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: quantity
      };
      
      const existingCart = JSON.parse(localStorage.getItem('cartItems')) || [];
      existingCart.push(cartItem);
      localStorage.setItem('cartItems', JSON.stringify(existingCart));
      
      alert('Item added to cart successfully!');
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const handleCartClick = () => {
    console.log('Cart icon clicked');
    navigate('/');
  };

  const handleProfileClick = () => {
    setShowProfile(!showProfile);
  };

  return (
    <div className="product-page">
      <nav className="top-nav">
        <div className="nav-left">
          <span className="back-arrow" onClick={() => navigate('/')}>‹</span>
          <span>Clothes</span>
          <span>Gadgets</span>
          <span>New</span>
          <span>Featured</span>
          <span>Barter</span>
        </div>
        <div className="logo">TECHSELL</div>
        <div className="nav-right">
          <FaSearch className="nav-icon" />
          <FaShoppingCart 
            className="nav-icon" 
            onClick={handleCartClick} 
            style={{ cursor: 'pointer' }} 
          />
          <FaUser 
            className="nav-icon" 
            onClick={handleProfileClick}
            style={{ cursor: 'pointer' }} 
          />
        </div>
      </nav>
      {showProfile && <ProfilePopup onClose={() => setShowProfile(false)} />}

      <div className="product-container">
        <div className="product-left">
          <div className="main-image">
            <img src={product?.image} alt={product?.name} />
          </div>
          <div className="thumbnail-row">
            <button className="nav-btn prev">‹</button>
            <div className="thumbnails">
              {relatedProducts.slice(0, 5).map((item, index) => (
                <div key={index} className="thumbnail-box">
                  <img src={item.image} alt={item.name} />
                </div>
              ))}
            </div>
            <button className="nav-btn next">›</button>
          </div>
        </div>

        <div className="product-right">
          <h1>{product?.name}</h1>
          <div className="rating">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < 4 ? "star-filled" : "star-empty"} />
              ))}
            </div>
            <span>(4.0)</span>
          </div>
          <div className="price">{product?.price}</div>
          
          <div className="quantity-section">
            <input 
              type="number" 
              value={quantity} 
              onChange={handleQuantityChange}
              min="1"
            />
            <button 
              className="add-cart-btn"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>

          <div className="meta-info">
            <p>Categories: <span>Clothing, Men's Shoes</span></p>
            <p>Tag: <span>nike</span></p>
            <p>Share product</p>
          </div>
        </div>
      </div>

      <div className="related-section">
        <h2>Related Products</h2>
        <div className="related-grid">
          {relatedProducts.map((item) => (
            <div 
              key={item.id} 
              className="related-item"
              onClick={() => {
                localStorage.setItem('selectedProduct', JSON.stringify(item));
                window.location.href = `/product/${item.id}`;
              }}
            >
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <div className="price">{item.price}</div>
              <button className="see-details">See Details</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;