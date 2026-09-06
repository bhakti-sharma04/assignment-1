import React, { useState } from 'react';

function CalculatorView() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (isNaN(n1) || isNaN(n2)) {
      setResult('Please enter valid numbers');
      return;
    }
    let res;
    switch (operation) {
      case '+': res = n1 + n2; break;
      case '-': res = n1 - n2; break;
      case '*': res = n1 * n2; break;
      case '/': res = n2 !== 0 ? (n1 / n2) : 'Cannot divide by zero'; break;
      default: res = 0;
    }
    setResult(res);
  };

  return (
    <div className="container my-5" style={{ maxWidth: '500px' }}>
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">Calculator Component</h4>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <label className="form-label">First Number</label>
            <input
              type="number"
              className="form-control"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
              placeholder="e.g. 10"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Operation</label>
            <select
              className="form-select"
              value={operation}
              onChange={(e) => setOperation(e.target.value)}
            >
              <option value="+">Addition (+)</option>
              <option value="-">Subtraction (-)</option>
              <option value="*">Multiplication (*)</option>
              <option value="/">Division (/)</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Second Number</label>
            <input
              type="number"
              className="form-control"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
              placeholder="e.g. 5"
            />
          </div>
          <button className="btn btn-primary w-100" onClick={calculate}>Calculate Result</button>

          {result !== null && (
            <div className="alert alert-info mt-3 mb-0 text-center fw-bold">
              Result: {result}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CalculatorView;
