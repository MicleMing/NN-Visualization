import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DeleteRounded from '@material-ui/icons/DeleteRounded';

interface NNLayerProps {
  id: string;
  nodes: number;
  remove: (id: string) => void;
  onChange: (id: string, value: number) => void;
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
  const [value, setValue] = useState(props.nodes);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setValue(newValue);
    props.onChange(props.id, newValue);
  };

  const onRemove = () => props.remove(props.id);
  return (
    <Grid container>
      <Grid item className={classes.label}> Layer1</Grid>
      <Grid item className={classes.textField}>
        <TextField
          id="nodes-number"
          value={value}
          onChange={handleChange}
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
        <IconButton onClick={onRemove} color="primary" aria-label="DeleteRounded">
          <DeleteRounded />
        </IconButton>
      </Grid>
    </Grid>
  )
}

export default NNLayer;
