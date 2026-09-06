import React, { useRef, useState } from 'react';

function LoginUncontrolled() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [msg, setMsg] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Using refs directly from DOM
    const user = usernameRef.current.value;
    const pass = passwordRef.current.value;
    setMsg("Logged in as: " + user);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', width: '280px', margin: '10px' }}>
      <h3>2. Login (Uncontrolled)</h3>
      <form onSubmit={handleLogin}>
        <label>Username:</label><br />
        <input type="text" ref={usernameRef} required /><br /><br />
        
        <label>Password:</label><br />
        <input type="password" ref={passwordRef} required /><br /><br />
        
        <button type="submit">Login</button>
      </form>
      {msg && <p style={{ color: 'blue' }}>{msg}</p>}
    </div>
  );
}

export default LoginUncontrolled;
