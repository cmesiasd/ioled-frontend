import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';


const useStyles = makeStyles({
  root: {
    width: 500,
  },
  input: {
    width: 50,
  },
});

export default function InputSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState(20);
  const [color, setColor] = React.useState("green");

  const handleSliderChange = (event, newValue) => {
    Number(newValue) >= 50 ? setColor("red") : setColor("green");
    setValue(newValue);
  };

  const handleInputChange = event => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
    Number(event.target.value) >= 50 ? setColor("red") : setColor("green");
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };
  const marks = [
    {
      value: 0,
      label: '0°C',
    },
    {
      value: 50,
      label: '50°C',
    },
    {
      value: 100,
      label: '100°C',
    },
  ];

  return (
    <div className={classes.root}>
      <Typography id="slider" variant="h4" gutterBottom>
        Temperatura
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            marks={marks}
            className="py-5"
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            valueLabelDisplay="on"
          />
        </Grid>
        <Grid item >
          <Input
            style={{color}}
            className={classes.input}
            value={value}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}