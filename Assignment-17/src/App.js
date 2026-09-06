import React from 'react';
import ToggleButton from './ToggleButton';
import CounterWithMultiples from './CounterWithMultiples';

function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center', marginTop: '30px' }}>
      <h2>Assignment 17 - useState Hook</h2>
      <ToggleButton />
      <CounterWithMultiples />
    </div>
  );
}

export default App;
