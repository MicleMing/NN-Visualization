import React, { Component } from 'react';

import Draw from '../../services/Draw3D';

class Draw3D extends Component {

  componentDidMount() {
    const drawer = new Draw();
    drawer.draw();
  }

  render() {
    return <canvas id="mainCanvas" width="400px" height="300px" />;
  }
}

export default Draw3D;
