// import React from 'react';
// import TextField from '@material-ui/core/TextField';



// export default function BasicTextFields() {


//   return (
//     <form className="alarm" noValidate autoComplete="off">
//       <TextField 
//         id="outlined-basic" 
//         label="Horas" 
//         variant="outlined" 
//         type="time"
//         defaultValue="01:30" />
//     </form>
//   );
// }

import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from '@material-ui/pickers';

export default function MaterialUIPickers() {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date('2019-12-24T01:40:54'));

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid >
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}