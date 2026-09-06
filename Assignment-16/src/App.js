import React from 'react';
import SignupControlled from './SignupControlled';
import LoginUncontrolled from './LoginUncontrolled';

function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <h2>Assignment 16 - Controlled vs Uncontrolled Forms</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        <SignupControlled />
        <LoginUncontrolled />
      </div>
    </div>
  );
}

export default App;
