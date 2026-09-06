import React, { useState } from 'react';

function UserProfile({ user }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [bio, setBio] = useState(user.bio);

  return (
    <div style={{ border: '1px solid #999', padding: '15px', width: '300px', margin: '15px auto' }}>
      {/* Ternary Operator Layout Switch */}
      {isEditing ? (
        <div>
          <h3>Edit Profile</h3>
          <label>Name:</label><br />
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
          <label>Bio:</label><br />
          <input type="text" value={bio} onChange={(e) => setBio(e.target.value)} /><br /><br />
          <button onClick={() => setIsEditing(false)}>Save</button>
        </div>
      ) : (
        <div>
          <h3>User Profile</h3>
          <p><b>Name:</b> {name}</p>
          <p><b>Bio:</b> {bio}</p>
          <button onClick={() => setIsEditing(true)}>Edit Profile</button>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
