import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import AddOutlined from '@material-ui/icons/AddCircleOutline';
import IconButton from '@material-ui/core/IconButton';

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
    this.addLayer = this.addLayer.bind(this);
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
    this.setState({ layers: nlayers });
  }

  addLayer() {
    const { layers } = this.state;
    const nlayer = layers.concat({ id: uuid.generate(), nodes: 1 });
    this.setState({
      layers: nlayer,
    });
  }

  genNNLayer() {
    const { layers } = this.state;
    return layers.map((layer, index) => {
      const { id, nodes } = layer;
      return (
        <NNLayer
          key={uuid.generate()}
          nodes={nodes}
          id={id}
          index={index}
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
        <Grid item>
          <IconButton onClick={this.addLayer} color="primary" aria-label="AddOutlined">
            <AddOutlined />
          </IconButton>
        </Grid>
      </Grid>
    );
  }
}

export default NNPanel;
