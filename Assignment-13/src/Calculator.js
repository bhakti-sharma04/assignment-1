import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(0);

  const handleAdd = () => setResult(Number(num1) + Number(num2));
  const handleSub = () => setResult(Number(num1) - Number(num2));
  const handleMul = () => setResult(Number(num1) * Number(num2));
  const handleDiv = () => setResult(Number(num2) !== 0 ? Number(num1) / Number(num2) : 'Error (Divide by 0)');
  const handleSquare = () => setResult(Number(num1) * Number(num1));
  const handleClear = () => {
    setNum1('');
    setNum2('');
    setResult(0);
  };

  return (
    <div style={{ border: '1px solid #333', padding: '20px', width: '280px', margin: '20px auto', textAlign: 'center' }}>
      <h3>Simple Calculator</h3>
      <input
        type="number"
        placeholder="First Number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        style={{ width: '90%', padding: '6px', marginBottom: '8px' }}
      />
      <input
        type="number"
        placeholder="Second Number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        style={{ width: '90%', padding: '6px', marginBottom: '12px' }}
      />
      <br />
      <div style={{ display: 'flex', gap: '5px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button onClick={handleAdd}>+</button>
        <button onClick={handleSub}>-</button>
        <button onClick={handleMul}>×</button>
        <button onClick={handleDiv}>÷</button>
        <button onClick={handleSquare}>x² (Num 1)</button>
        <button onClick={handleClear}>Clear</button>
      </div>
      <h4 style={{ marginTop: '15px' }}>Result: {result}</h4>
    </div>
  );
}

export default Calculator;
