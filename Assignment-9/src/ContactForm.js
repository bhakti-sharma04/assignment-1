import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', width: '320px', margin: '20px auto' }}>
      <h3>Contact Form</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Name: </label><br />
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Email: </label><br />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Mobile: </label><br />
          <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Address: </label><br />
          <textarea value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div style={{ marginTop: '15px', background: '#eef', padding: '10px' }}>
          <h4>Submitted Details:</h4>
          <p><b>Name:</b> {name}</p>
          <p><b>Email:</b> {email}</p>
          <p><b>Mobile:</b> {mobile}</p>
          <p><b>Address:</b> {address}</p>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
