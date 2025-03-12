import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaUser, FaUpload } from 'react-icons/fa';
import './BarterUpload.css';

const BarterUpload = () => {
  const navigate = useNavigate();
  const [description, setDescription] = useState('');
  const [swapItems, setSwapItems] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/barter/upload/success');
  };

  return (
    <div className="barter-upload-page">
      <nav className="navbar">
        <div className="nav-left">
          <button className="back-button" onClick={() => navigate(-1)}>‹</button>
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

      <form onSubmit={handleSubmit} className="upload-form">
        <div className="upload-box">
          <FaUpload size={30} />
          <p>upload image or drop image here</p>
        </div>

        <div className="form-group">
          <label>Describe item</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your item, state, use period..."
            required
          />
        </div>

        <div className="form-group">
          <label>List items for possible swap (3 at most)</label>
          <textarea
            value={swapItems}
            onChange={(e) => setSwapItems(e.target.value)}
            placeholder="3 items or more..."
            required
          />
        </div>

        <button type="submit" className="submit-button">Upload</button>

        <div className="back-link">
          Go back to <span onClick={() => navigate('/barter')}>shopping</span>
        </div>
      </form>
    </div>
  );
};

export default BarterUpload;