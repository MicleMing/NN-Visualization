import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styled from '../../styled';

import DrawPanel from '../DrawPanel';
import DIYPanel from '../DIYPanel';

interface VisualizationProps {

}

interface VisualizationState {

}

class Visualization extends Component<VisualizationProps, VisualizationState> {
  render() {
    return (
      <Grid container>
        <Grid item xs={3} ><DIYPanel /></Grid>
        <Grid item xs={9}><DrawPanel /></Grid>
      </Grid>
    );
  }
}

export default Visualization;
