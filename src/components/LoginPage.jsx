import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import googleIcon from '../assets/google.png';
import universityIcon from '../assets/university.png';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
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
    navigate('/home');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="left-side">
          <div className="header">
            <h1>TechSell</h1>
            <p>Your Campus, Your Market</p>
          </div>

          <div className="auth-buttons">
            <button className="btn-light" onClick={() => navigate('/')}>Sign Up</button>
            <button className="btn-dark">Log In</button>
          </div>

          <div className="form-content">
            <h2>Continue shopping with us</h2>
            <p>Log In with open account</p>

            <div className="social-buttons">
              <button className="social-btn university-btn">
                <img src={universityIcon} alt="University" />
              </button>
              <button className="social-btn google-btn">
                <img src={googleIcon} alt="Google" />
              </button>
            </div>

            <div className="divider">or</div>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="username/student email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <input
                type="password"
                placeholder="password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
              
              <div className="form-footer">
                <div className="remember-me">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={formData.rememberMe}
                    onChange={(e) => setFormData({...formData, rememberMe: e.target.checked})}
                  />
                  <label htmlFor="remember">Remember Me</label>
                </div>
                <a href="#" className="forgot-password">Forgot Password?</a>
              </div>

              <button type="submit" className="shop-now-btn">Shop Now</button>
            </form>
          </div>
        </div>

        <div className="right-side">
          <img 
            src="https://images.unsplash.com/photo-1615477550927-6ec8445fcf25?w=500&auto=format" 
            alt="Fresh Garlic" 
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;