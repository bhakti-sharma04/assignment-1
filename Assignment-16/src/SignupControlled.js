import React, { useState } from 'react';

function SignupControlled() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMsg("User registered: " + username + " (" + email + ")");
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', width: '280px', margin: '10px' }}>
      <h3>1. Signup (Controlled)</h3>
      <form onSubmit={handleSubmit}>
        <label>Username:</label><br />
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required /><br /><br />
        
        <label>Email:</label><br />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br /><br />
        
        <label>Password:</label><br />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br /><br />
        
        <button type="submit">Sign Up</button>
      </form>
      {msg && <p style={{ color: 'green' }}>{msg}</p>}
    </div>
  );
}

export default SignupControlled;
