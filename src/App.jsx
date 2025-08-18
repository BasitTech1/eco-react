import React from 'react';
import Home from './Pages/home';
import ProductCategory from './Pages/ProductCategory';
import AddToCart from './Pages/AddToCart';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProductCategory" element={<ProductCategory />} />
        <Route path="/AddToCart" element={<AddToCart />} />
      </Routes>
    </Router>
  );
}

export default App; 