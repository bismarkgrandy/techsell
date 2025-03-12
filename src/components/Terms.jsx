import React from 'react';
import './Terms.css';

const Terms = () => {
  return (
    <div className="terms-container">
      <h1>Terms and Conditions</h1>
      <div className="terms-content">
        <h2>1. Introduction</h2>
        <p>Welcome to TECHSELL. By accessing our website, you agree to these terms and conditions.</p>

        <h2>2. User Accounts</h2>
        <p>Users must register with valid information and maintain account security.</p>

        <h2>3. Product Listings</h2>
        <p>All products are subject to availability. Prices and descriptions are accurate to the best of our knowledge.</p>

        <h2>4. Purchases</h2>
        <p>Orders are subject to acceptance and confirmation. Payment must be made in full at time of purchase.</p>

        <h2>5. Shipping</h2>
        <p>Delivery times are estimates only. Risk passes to buyer upon delivery.</p>

        <h2>6. Returns</h2>
        <p>14-day return policy for most items. Items must be unused and in original packaging.</p>

        <h2>7. Privacy</h2>
        <p>Your use of TECHSELL is subject to our Privacy Policy.</p>
      </div>
    </div>
  );
};

export default Terms;