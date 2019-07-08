import React, { Component } from 'react';
import * as ReactDOM from 'react-dom';
import DrawPanel from './container/DrawPanel';


class PlayerDemo extends Component<any, any> {
  render() {
    return (
      <div>
        <div>Neural Network Visualization</div>
        <DrawPanel />
      </div>
    )
  }
}

ReactDOM.render(
  <PlayerDemo />,
  document.getElementById('nn-visualization'),
);
