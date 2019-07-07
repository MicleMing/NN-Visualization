import React, { Component } from 'react';
import * as ReactDOM from 'react-dom';


class PlayerDemo extends Component<any, any> {
  render() {
    return (
      <div>Neural Network Visualization</div>
    )
  }
}

ReactDOM.render(
  <PlayerDemo />,
  document.getElementById('nn-visualization'),
);
