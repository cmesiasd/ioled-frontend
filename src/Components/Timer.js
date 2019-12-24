import React from 'react';
import Typography from '@material-ui/core/Typography';
import Alarm from './Alarm';


export default function AlarmTimer() {   
    
    return (
        <div>
            <Typography id="timer" variant="h4" gutterBottom>
                Tiempo
            </Typography>

            < Alarm />

    </div>
    );
  }