import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  TimePicker,
} from '@material-ui/pickers';
import Timer from 'react-compound-timer';

export default function MaterialUIPickers() {
  const [selectedDate, setSelectedDate] = React.useState(new Date("YYYY-MM-DDTHH:MM:SS").toLocaleString());
  const [ms, setMs] = React.useState(70000);

  const handleDateChange = date => {
    setSelectedDate(date);
    setMs(date.getSeconds()*1000+date.getMinutes()*60000+date.getHours()*3600000)
  };
  
  return (
    <div>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <TimePicker
        id="date"
        ampm={false}
        openTo="hours"
        views={["hours", "minutes", "seconds"]}
        format="HH:mm:ss"
        label="Elija el tiempo"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </MuiPickersUtilsProvider>
    < br />
    < br />
    < Timer
    onChange={handleDateChange}
    initialTime={ms}
    startImmediately={false}
    direction="backward"
    >
    {({ start, resume, pause, stop, reset }) => (
        <React.Fragment>
            <div>
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