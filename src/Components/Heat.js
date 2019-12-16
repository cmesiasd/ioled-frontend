import React, { Component } from 'react';
import '../App.css';
import Typography from '@material-ui/core/Typography';




export default class Heat extends Component {
    constructor(props) {
        super(props);
        this.state = { color: 'green' , inputValue: 30 };
    }

    handleChange = (e) => {
        if(e.target.value >= 50){
            this.setState({  color: 'red', inputValue: parseInt(e.target.value)});
        }
        else{
            this.setState({ color: 'green',  inputValue: parseInt(e.target.value) })
        }
    }

    render(){
        return (   
            <div>
                <Typography id="discrete-slider" variant="h4" gutterBottom>
                    Calor:
                </Typography>
                <input type="number" onChange={this.handleChange} value={this.state.inputValue} style={this.state}/>                
            </div>
        );
    }
}