import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpPage.css';
import googleIcon from '../assets/google.png';
import universityIcon from '../assets/university.png';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    navigate('/home'); // Navigate to home page after successful login
  };

  const handleLogin = () => {
    // Add your login logic here
    navigate('/home'); // Navigate to home page after successful login
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="left-side">
          <div className="header">
            <h1>TechSell</h1>
            <p>Your Campus, Your Market</p>
          </div>

          <div className="auth-buttons">
            <button className="btn-dark">Sign Up</button>
            <button className="btn-light" onClick={handleLogin}>Log In</button>
          </div>

          <div className="form-content">
            <h2>Begin your shopping with us</h2>
            <p>Sign Up with open account</p>

            <div className="social-login">
              <button className="social-btn">
                <img src={universityIcon} alt="University" />
              </button>
              <button className="social-btn">
                <img src={googleIcon} alt="Google" />
              </button>
            </div>

            <div className="divider">or</div>

            <form onSubmit={handleSubmit}>
              <input 
                type="text"
                name="username"
                placeholder="username"
                value={formData.username}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="student email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="password"
                value={formData.password}
                onChange={handleChange}
              />
              
              <div className="remember-me">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                <label>Remember Me</label>
              </div>

              <button type="submit" className="shop-now-btn">Shop Now</button>
            </form>

            <p className="footer-text">Become a rider? Deliver your own products!</p>
          </div>
        </div>

        <div className="right-side">
          <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&auto=format" 
            alt="Market Vendor" 
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;