import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';  // Make sure this matches your CSS filename
import marketVendor from '../assets/marketvendor.jpg';

const SignUp = () => {
  console.log('SignUp component rendering'); // Add this line
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log('Form submitted:', formData);
    navigate('/product');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="left-side">
          <div className="header">
            <h1>TECHSELL</h1>
            <h2>Create Account</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <button type="submit" className="shop-now-btn">Sign Up</button>
          </form>
          <p className="footer-text">Already have an account? <span onClick={() => navigate('/login')}>Login</span></p>
        </div>
        <div className="right-side">
          <img 
            src={marketVendor} 
            alt="Market vendor" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;