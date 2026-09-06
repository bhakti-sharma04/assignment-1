import React from 'react';
import UserProfile from './UserProfile';

function App() {
  const user = { name: "Bhakti", bio: "Learning React step by step" };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>Assignment 12 - Ternary Operator & Scroll to Top</h2>

      <UserProfile user={user} />

      <div style={{ marginTop: '50px', background: '#f9f9f9', padding: '20px' }}>
        <p>Content to make the page scrollable...</p>
        <p>Paragraph 1: React makes it painless to create interactive UIs.</p>
        <p>Paragraph 2: Component-based design lets you build encapsulated components.</p>
        <p>Paragraph 3: Declarative views make your code more predictable.</p>
        <p style={{ height: '300px' }}></p>
        <button onClick={scrollToTop} style={{ padding: '8px 16px', cursor: 'pointer' }}>
          Scroll To Top ↑
        </button>
      </div>
    </div>
  );
}

export default App;
