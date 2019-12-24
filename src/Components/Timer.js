// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';

// const useStyles = makeStyles(theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: 200,
//   },
// }));

// function TimePickers() {
//   const classes = useStyles();

//   return (
//     <form className={classes.container} noValidate>
//       <TextField
//         id="time"
//         label="Timer!"
//         type="time"
//         defaultValue="07:30"
//         className={classes.textField}
//         InputLabelProps={{
//           shrink: true,
//         }}
//         inputProps={{
//           step: 300, // 5 min
//         }}
//       />
//     </form>
//   );
// }

// export default TimePickers;

import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


export default class Timer extends Component {
    state = {
        minutes: 1,
        seconds: 0,
    }
    
    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            } 
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const { minutes, seconds } = this.state
        return (
            <div>
                <form className={"hola"} noValidate>
                <TextField
                    id="time"
                    label="Alarm clock"
                    type="time"
                    defaultValue="07:30"
                    className={"hola"}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    inputProps={{
                    step: 300, // 5 min
                    }}
                />
                </form>
                { minutes === 0 && seconds === 0
                    ? <Typography id="discrete-slider" variant="h4" gutterBottom>
                        Tiempo!
                    </Typography>
                    : <Typography id="discrete-slider" variant="h4" gutterBottom>
                        Tiempo Faltante: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                    </Typography>
                }
            </div>
        )
    }
}
