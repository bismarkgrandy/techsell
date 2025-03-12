import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaUser, FaRandom } from 'react-icons/fa';
import './BarterUploadSuccessful.css';

const BarterUploadSuccessful = () => {
  const navigate = useNavigate();

  return (
    <div className="barter-upload-successful">
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

      <div className="success-container">
        <div className="success-box">
          <FaRandom size={40} />
          <p>upload successful</p>
        </div>
        <div className="success-message">
          <h2>Your item has been received and is being processed</h2>
          <p>Uploads are visible within the space of 2 - 3 days</p>
        </div>
      </div>
    </div>
  );
};

export default BarterUploadSuccessful;