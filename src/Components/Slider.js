import React from 'react';
import '../App.css';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

function valuetext(value) {
  return `${value}°C`;
}
  

function SliderTemp() {

  return (
    <div className="Slider">
      <Typography id="discrete-slider" variant="h4" gutterBottom>
        Temperatura
      </Typography>
      <Slider id="slidergg"
        defaultValue={20}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={1}
        valueLabelDisplay="on"
        marks={marks}
      />
      
    </div>
  );
}

export default SliderTemp;
