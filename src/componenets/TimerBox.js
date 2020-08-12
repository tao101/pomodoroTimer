import React from "react";
import "./TimerBox.css";
import { yellow } from "@material-ui/core/colors";

export default class TimerBox extends React.Component {
  state = {
    didStart: true,
    selectedItem: 1,
    time: 1500,
  };

  onStart = () => {
    const { didStart } = this.state;
    this.setState({
      didStart: !didStart,
    });
    if (!didStart) {
      this.interval = setInterval(() => {
        const { time } = this.state;
        if (time == 0) {
          this.setState({ didStart: false });
          clearInterval(this.interval);
        } else {
          var t = time - 1;
          this.setState({ time: t });
        }
      }, 1000);
    } else {
      clearInterval(this.interval);
    }
  };

  onPomodoro = () => {
    this.setState({ selectedItem: 1 });
    this.props.onChangeTimer(1);
  };

  onShortBreak = () => {
    this.setState({ selectedItem: 2 });
    this.props.onChangeTimer(2);
  };

  onLongBreak = () => {
    this.setState({ selectedItem: 3 });
    this.props.onChangeTimer(3);
  };

  render() {
    const { selectedItem, didStart, time } = this.state;
    const title = selectedItem == 1 ? "Time to work!" : "Time for a break";
    const buttonClass = !didStart ? "buttonTxt" : "activeButton";
    const buttonText = !didStart ? "START" : "STOP";
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return (
      <div className="TimerBox">
        <div className="boxContainer">
          <div className="timers">
            <h4
              className={"timer " + (selectedItem == 1 ? "active" : "")}
              onClick={this.onPomodoro}
            >
              Pomodoro
            </h4>
            <h4
              className={"timer " + (selectedItem == 2 ? "active" : "")}
              onClick={this.onShortBreak}
            >
              Short Break
            </h4>
            <h4
              className={"timer " + (selectedItem == 3 ? "active" : "")}
              onClick={this.onLongBreak}
            >
              Long Break
            </h4>
          </div>
          <div>
            <h1 className="time">{min + ":" + (sec > 9 ? sec : "0" + sec)}</h1>
          </div>
          <div className="buttonContainer">
            <div className="button">
              <h2 className={buttonClass} onClick={this.onStart}>
                {buttonText}
              </h2>
            </div>
          </div>
        </div>
        <h4 className="stateOfApp">{title}</h4>
      </div>
    );
  }
}
