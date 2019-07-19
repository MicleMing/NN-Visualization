import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import eventStream, { NNEvent } from '../../services/EventStream';

import styled from '../../styled';

import Draw from '../DrawPanel';
import DIYPanel from '../DIYPanel';
import { any } from 'prop-types';

interface VisualizationProps {

}

interface VisualizationState {
  draw: number;
}

class Visualization extends Component<VisualizationProps, VisualizationState> {
  private subscription: any;

  constructor(props: VisualizationProps) {
    super(props);
    this.state = {
      draw: 0,
    };
  }
  componentWillMount() {
    this.subscription = eventStream.subscribe(NNEvent.PanelChange, (data) => {
      this.setState({
        draw: data,
      });
    });
  }
  componentWillUnmount() {
    this.subscription.unsubscribe();
  }
  render() {
    const { draw } = this.state;
    const Draw2D = Draw.Draw2D;
    const Draw3D = Draw.Draw3D;
    return (
      <Grid container>
        <Grid item xs={3} ><DIYPanel /></Grid>
        {draw === 0 && <Grid item xs={9}><Draw3D /></Grid>}
        {draw === 1 && <Grid item xs={9}><Draw2D /></Grid>}
      </Grid>
    );
  }
}

export default Visualization;
