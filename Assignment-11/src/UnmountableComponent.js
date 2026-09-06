import React, { Component } from 'react';

class UnmountableComponent extends Component {
  componentWillUnmount() {
    alert("Bye");
  }

  render() {
    return (
      <div style={{ border: '1px solid red', padding: '10px', marginTop: '10px' }}>
        <p>This is the child component. Click unmount to remove me.</p>
      </div>
    );
  }
}

export default UnmountableComponent;
