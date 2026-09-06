import React, { Component } from 'react';
import Counter from './Counter';
import UserProfile from './UserProfile';

class App extends Component {
  render() {
    return (
      <div style={{ fontFamily: 'sans-serif' }}>
        <h2 style={{ textAlign: 'center' }}>Assignment 10 - Class Components</h2>
        <Counter />
        <UserProfile username="bhakti" email="bhakti@gmail.com" isAdmin={true} />
        <UserProfile username="rahul" email="rahul@gmail.com" isAdmin={false} />
      </div>
    );
  }
}

export default App;
