import React, { useState } from 'react';

function CounterView() {
  const [count, setCount] = useState(0);

  return (
    <div className="container my-5" style={{ maxWidth: '450px' }}>
      <div className="card shadow-sm text-center">
        <div className="card-header bg-success text-white">
          <h4 className="mb-0">Counter Component</h4>
        </div>
        <div className="card-body p-4">
          <h2 className="display-4 fw-bold text-success mb-3">{count}</h2>
          <div className="d-flex justify-content-center gap-2">
            <button className="btn btn-success px-3" onClick={() => setCount(count + 1)}>Increment</button>
            <button className="btn btn-danger px-3" onClick={() => setCount(count - 1)}>Decrement</button>
            <button className="btn btn-secondary px-3" onClick={() => setCount(0)}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CounterView;
