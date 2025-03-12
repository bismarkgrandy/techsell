
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpPage from './components/SignUpPage';
import Navigation from './components/Navigation';
import ClothesPage from './components/ClothesPage';
import GadgetsPage from './components/GadgetsPage';
import NewPage from './components/NewPage';
import LoginPage from './components/LoginPage';
import FeaturedPage from './components/FeaturedPage';
import BarterPage from './components/BarterPage';
import BarterUploadPage from './components/BarterUploadPage';
import BarterUpload from './components/BarterUpload';
import BarterUploadSuccessful from './components/BarterUploadSuccessful';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignUpPage />} />
          <Route path="/home" element={<Navigation />} />
          <Route path="/clothes" element={<ClothesPage />} />
          <Route path="/gadgets" element={<GadgetsPage />} />
          <Route path="/new" element={<NewPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/featured" element={<FeaturedPage />} />
          <Route path="/barter" element={<BarterPage />} />
          <Route path="/barter/upload" element={<BarterUploadPage />} />
          <Route path="/barter/upload/success" element={<BarterUploadSuccessful />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;