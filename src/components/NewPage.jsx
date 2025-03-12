import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import './NewPage.css';
import './shared.css';

const NewPage = () => {
  const navigate = useNavigate();

  const newItems = [
    {
      id: 1,
      name: "Premium Watch",
      price: "$199.99",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      name: "Leather Wallet",
      price: "$49.99",
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      name: "Sunglasses",
      price: "$89.99",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      name: "Premium Backpack",
      price: "$89.99",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 5,
      name: "Coffee Maker",
      price: "$79.99",
      image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 6,
      name: "Bluetooth Speaker",
      price: "$69.99",
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=500&q=80"
    },
    // Update these items in newItems array
    {
      id: 7,
      name: "Designer Desk Lamp",
      price: "$129.99",
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 8,
      name: "Desk Plant Set",
      price: "$34.99",
      image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 9,
      name: "Wall Calendar",
      price: "$19.99",
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 10,
      name: "Portable Power Bank",
      price: "$49.99",
      image: "https://images.unsplash.com/photo-1609592786331-b7f6f367665e?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 11, // Changed from 10 to 11
      name: "Smart Band",
      price: "$79.99",
      image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <div className="new-page">
      <nav className="navbar">
        <div className="nav-left">
          <button className="back-button" onClick={() => navigate('/home')}>‹</button>
          <ul className="nav-links">
            <li><a onClick={() => navigate('/clothes')}>Clothes</a></li>
            <li><a onClick={() => navigate('/gadgets')}>Gadgets</a></li>
            <li><a onClick={() => navigate('/new')}>New</a></li>
            <li><a onClick={() => navigate('/featured')}>Featured</a></li>
            <li><a onClick={() => navigate('/barter')}>Barter</a></li>
          </ul>
        </div>

        <div className="nav-center">
          <h1>TECHSELL</h1>
        </div>

        <div className="nav-right">
          <button className="icon-button"><FaSearch /></button>
          <button className="icon-button"><FaShoppingCart /></button>
          <button className="icon-button"><FaUser /></button>
        </div>
      </nav>

      <div className="products-grid">
        // In your map function where you render products
        {newItems.map(item => (
          <div key={item.id} className="product-card" onClick={() => navigate(`/product/${item.id}`)}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button className="details-button">See Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewPage;