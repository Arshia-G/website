import React from 'react';
import Nav from './Components/Nav/Nav.jsx';

export default function App() {
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
      
      <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
        <Nav />
        
        <div style={{ paddingTop: '120px', padding: '120px 20px 20px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              Welcome to Weaves & Tassels
            </h1>
            <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
              This is a demo page to showcase your navigation component.
            </p>
          </div>
        </div>
      </div>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
    </>
  );
}