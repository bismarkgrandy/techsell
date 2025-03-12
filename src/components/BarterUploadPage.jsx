import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaUser, FaUpload } from 'react-icons/fa';
import './BarterUploadPage.css';

const BarterUploadPage = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [description, setDescription] = useState('');
  const [swapItems, setSwapItems] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    // For now, just navigate to success page
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

      <form onSubmit={handleSubmit} className="upload-container">
        <div 
          className="upload-box"
          onClick={() => fileInputRef.current.click()}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          {selectedImage ? (
            <img src={selectedImage} alt="Uploaded preview" className="uploaded-image" />
          ) : (
            <>
              <FaUpload className="upload-icon" />
              <p>Upload image or drop image here</p>
            </>
          )}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageUpload}
            accept="image/*"
            style={{ display: 'none' }}
          />
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

        <button type="submit" className="submit-button">Submit</button>

        <div className="back-link">
          Go back to <span onClick={() => navigate('/barter')}>shopping</span>
        </div>
      </form>
    </div>
  );
};

export default BarterUploadPage;