import React, { Component } from "react";
import "./InputForm.css";
// Class Component Start Here
class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: "00:00:00",
      end: "00:00:00"
    };
  }
  //Input Change Handler Function
  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  // Input Field Validate Here By RegExp for 24 Hours Minute Second
  validateInput = input => {
    const regex = new RegExp(
      "^([0-1][0-9]|[2][0-3]):([0-5][0-9]):([0-5][0-9])$"
    );
    return regex.test(input);
  };

  //   Handle START NOW Button by startCountdown Function 
  startCountdown = () => {
    let { setTime, setMsg, timer, setTimer } = this.props;
    clearInterval(timer);
    if (
      this.validateInput(this.state.start) &&
      this.validateInput(this.state.end)
    ) {
      let startArr = this.state.start.split(":");
      let endArr = this.state.end.split(":");
      let startSec =
        parseInt(startArr[0]) * 3600 +
        parseInt(startArr[1]) * 60 +
        parseInt(startArr[2]);
      let endSec =
        parseInt(endArr[0]) * 3600 +
        parseInt(endArr[1]) * 60 +
        parseInt(endArr[2]);
      if (endSec <= startSec) {
        setMsg("end time must be greater than start time");
      } else {
        let time = endSec - startSec;
        setMsg("");
        setTime(time);
        let newTimer = setInterval(
          () => {
            setTime(--time);
          },
          1000,
          time
        );
        setTimer(newTimer);
      }
    } else {
      setMsg("Invalid Time Format");
    }
  };
  render() {
    return (
      <div className="Form">
        <div style={{ margin: "10px" }}>
          <label className="Label">START TIME (HH:MM:SS)</label>
          <input type="text" value={this.state.start} onChange={this.handleInputChange} name="start" />
        </div>
        <div style={{ margin: "10px" }}>
          <label className="Label">END TIME (HH:MM:SS)</label>
          <input type="text" value={this.state.end} onChange={this.handleInputChange} name="end" />
        </div>
        <button onClick={this.startCountdown}>START NOW</button>
      </div>
    );
  }
}

export default InputForm;
// Class Component End Here  by Default export