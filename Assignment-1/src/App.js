import React from 'react';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Welcome to My First React App</h1>
        <p>This is Assignment 1. I created a Header and a Footer component.</p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
