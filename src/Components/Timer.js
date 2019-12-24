import React from 'react';
import Timer from 'react-compound-timer';
import Typography from '@material-ui/core/Typography';
import Alarm from './Alarm';


export default function AlarmTimer() {   
    
    return (
        <div>
            <Typography id="timer" variant="h4" gutterBottom>
                Tiempo
            </Typography>
            <Alarm />
            <Timer
            initialTime={65000}
            startImmediately={false}
            direction="backward"
            >
            {({ start, resume, pause, stop, reset, timerState }) => (
                <React.Fragment>
                    <div>
                        <Timer.Days className="row"/> Días <br />
                        <Timer.Hours className="row"/> Horas <br />
                        <Timer.Minutes className="row"/> Minutos <br />
                        <Timer.Seconds className="row"/> Segundos <br />
                    </div>
                    <br />
                    <div>
                        <button type="button" className="btn btn-outline-success" onClick={start}> <i className="material-icons">play_arrow</i> Start</button>
                        <button type="button" className="btn btn-outline-secondary" onClick={pause}><i className="material-icons">pause</i>Pause</button>
                        <button type="button" className="btn btn-outline-info" onClick={resume}><i className="material-icons">cached</i>Resume</button>
                        <button type="button" className="btn btn-outline-danger" onClick={stop}><i className="material-icons">stop</i>Stop</button>
                        <button type="button" className="btn btn-outline-warning" onClick={reset}> <i className="material-icons">replay</i>Reset</button>
                    </div>
                </React.Fragment>
            )}
            </Timer>
    </div>
    );
  }