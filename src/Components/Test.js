import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Alarm from './Alarm';



export default class AlarmTest extends Component {   

    render(){
        return (
            <div>
                < Typography id="timer" variant="h4" gutterBottom>
                    Tiempo
                </ Typography>

                < Alarm />
                
        </div>
    );
  }
}