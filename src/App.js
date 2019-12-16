import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import SliderTemp from './Components/Slider';
import Timer from './Components/Timer';
import Heat from './Components/Heat';

const useStyles = makeStyles(theme => ({
  root: {
    width: 600,
  },
  margin: {
    height: theme.spacing(3),
  },
}));


function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      < SliderTemp />
      < Timer />
      < Heat />
    </div>
  );
}

export default App;
