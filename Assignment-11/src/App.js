import React, { Component } from 'react';
import LoadingComponent from './LoadingComponent';
import UnmountableComponent from './UnmountableComponent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showChild: true
    };
  }

  toggleChild = () => {
    this.setState({ showChild: !this.state.showChild });
  };

  render() {
    return (
      <div style={{ fontFamily: 'sans-serif', width: '400px', margin: '20px auto' }}>
        <h2>Assignment 11 - Lifecycle Methods</h2>
        
        <h4>Part 1: 3 Second Loading</h4>
        <LoadingComponent />

        <hr />

        <h4>Part 2: Unmount Component</h4>
        {this.state.showChild && <UnmountableComponent />}
        <br />
        <button onClick={this.toggleChild}>
          {this.state.showChild ? "Unmount Child" : "Mount Child"}
        </button>
      </div>
    );
  }
}

export default App;
