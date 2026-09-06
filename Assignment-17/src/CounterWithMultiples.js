import React, { useState } from 'react';

function CounterWithMultiples() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: '1px solid gray', padding: '15px', width: '300px', margin: '15px auto', textAlign: 'center' }}>
      <h3>2. Simple Counter</h3>
      <h2>{count}</h2>
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button onClick={() => setCount(count + 1)}>Increment (+1)</button>
        <button onClick={() => setCount(count - 1)}>Decrement (-1)</button>
        <button onClick={() => setCount(count * 5)}>Multiple of 5 (×5)</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default CounterWithMultiples;
