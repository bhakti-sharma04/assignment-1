import React, { Component } from 'react';

class UserProfile extends Component {
  render() {
    return (
      <div style={{ border: '1px solid gray', padding: '15px', width: '250px', margin: '15px auto' }}>
        <h3>User Profile</h3>
        <p><b>Username:</b> {this.props.username}</p>
        <p><b>Email:</b> {this.props.email}</p>
        <p><b>Role:</b> {this.props.isAdmin ? "Role: Administrator" : "Role: User"}</p>
      </div>
    );
  }
}

export default UserProfile;
