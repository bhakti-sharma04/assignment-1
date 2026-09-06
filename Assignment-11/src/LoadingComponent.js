import React, { Component } from 'react';

class LoadingComponent extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    // 3 second timer
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  }

  render() {
    if (this.state.loading) {
      return <h3>Loading... please wait 3 seconds</h3>;
    }
    return (
      <div style={{ border: '1px solid green', padding: '10px' }}>
        <h3>Component Loaded Successfully!</h3>
        <p>This whole component appeared after 3 seconds.</p>
      </div>
    );
  }
}

export default LoadingComponent;
