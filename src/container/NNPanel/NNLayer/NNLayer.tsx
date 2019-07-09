import React from 'react';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DeleteRounded from '@material-ui/icons/DeleteRounded';

interface NNLayerProps {

}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    label: {
      margin: 'auto',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    iconButton: {
      padding: 10,
      height: '100%',
    },
  }),
);

const NNLayer = (props: NNLayerProps) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item className={classes.label}> Layer1</Grid>
      <Grid item className={classes.textField}>
        <TextField
          id="nodes-number"
          // value={values.age}
          // onChange={handleChange('age')}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="nodes number"
          margin="normal"
        />
      </Grid>
      <Grid item className={classes.iconButton}>
        <IconButton color="primary" aria-label="DeleteRounded">
          <DeleteRounded />
        </IconButton>
      </Grid>
    </Grid>
  )
}

export default NNLayer;
