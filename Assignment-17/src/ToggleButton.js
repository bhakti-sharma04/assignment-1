import React, { useState } from 'react';

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div style={{ border: '1px solid gray', padding: '15px', width: '250px', margin: '15px auto', textAlign: 'center' }}>
      <h3>1. Toggle Button</h3>
      <p>Current State: <b>{isOn ? "ON" : "OFF"}</b></p>
      <button
        onClick={() => setIsOn(!isOn)}
        style={{
          padding: '8px 20px',
          backgroundColor: isOn ? 'green' : 'red',
          color: 'white',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        {isOn ? "Turn OFF" : "Turn ON"}
      </button>
    </div>
  );
}

export default ToggleButton;
