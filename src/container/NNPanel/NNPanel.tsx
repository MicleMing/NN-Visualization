import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import NNLayer from './NNLayer';

interface NNPanelProps {

}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  }),
);

const NNPanel = (props: NNPanelProps) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <NNLayer />
    </Grid>
  );
};

export default NNPanel;
