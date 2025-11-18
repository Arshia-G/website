import React, { useState } from 'react';
import Nav from './Components/Nav/Nav.jsx'; 
// FIX: Added '/Pages/' to the import path below
import Index from './Components/Pages/Index.jsx'; 
// FIX: Added '/Pages/' to the import path below
import ProductDetails from './Components/Pages/ProductDetails.jsx'; 
import './index.css';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Function to handle clicking a product from the Home page
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    window.scrollTo(0, 0); // Scroll to top when viewing details
  };

  // Function to go back to Home
  const handleBackToShop = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet"
      />
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.0/font/bootstrap-icons.min.css" 
        rel="stylesheet"
      />
      
      <div style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
        <Nav />
        
        {selectedProduct ? (
          <ProductDetails 
            product={selectedProduct} 
            onBack={handleBackToShop} 
          />
        ) : (
          <Index onProductClick={handleProductClick} />
        )}
      </div>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
    </>
  );
}