import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import uuid from '../../services/uuid';
import NNLayer from './NNLayer';

interface ILayer {
  id: string;
  nodes: number;
}

interface NNPanelProps {

}

interface NNPanelState {
  layers: ILayer[];
}

class NNPanel extends Component<NNPanelProps, NNPanelState> {

  constructor(props: NNPanelProps) {
    super(props);
    this.state = {
      layers: [{
        id: uuid.generate(),
        nodes: 1,
      }],
    };
    this.removeLayer = this.removeLayer.bind(this);
    this.genNNLayer = this.genNNLayer.bind(this);
    this.changeLayer = this.changeLayer.bind(this);
  }

  removeLayer(id: string) {
    const { layers } = this.state;
    const nlayers = layers.filter(layer => layer.id !== id);
    this.setState({
      layers: nlayers,
    });
  }

  changeLayer(id: string, value: number) {
    const { layers } = this.state;
    const nlayers = layers.map((layer) => {
      if (layer.id === id) {
        layer.nodes = value;
      }
      return {
        ...layer,
      };
    });
    this.setState({ layers: nlayers })
  }

  genNNLayer() {
    const { layers } = this.state;
    return layers.map((layer) => {
      const { id, nodes } = layer;
      return (
        <NNLayer
          key={uuid.generate()}
          nodes={nodes}
          id={id}
          remove={this.removeLayer}
          onChange={this.changeLayer}
        />
      );
    });
  }

  render() {
    return (
      <Grid container>
        {this.genNNLayer()}
      </Grid>
    );
  }
}

export default NNPanel;
