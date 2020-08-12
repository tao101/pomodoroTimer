import React from "react";
import "./Nav.css";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Button from "@material-ui/core/Button";
import SettingsSharpIcon from "@material-ui/icons/SettingsSharp";
import InfoIcon from "@material-ui/icons/Info";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export default class Nav extends React.Component {
  onAbout = () => {
    alert("onAbout");
  };

  onSetting = () => {
    alert("onAbout");
  };

  onLogin = () => {
    alert("Not Implemented Yet");
  };

  render() {
    return (
      <div className="header">
        <div className="headerLogo">
          <CheckCircleIcon className="logo" />
          <h3 className="title">PomodoroTimer</h3>
        </div>
        <div className="settingContainer">
          <div className="setting">
            <Button
              variant="contained"
              color="secondary"
              className="iconButton"
              onClick={this.onAbout}
            >
              <InfoIcon />
              <span className="settingTxt">About</span>
            </Button>
          </div>
          <div className="setting">
            <Button
              variant="contained"
              color="secondary"
              className="iconButton"
              onClick={this.onSetting}
            >
              <SettingsSharpIcon />
              <span className="settingTxt">Setting</span>
            </Button>
          </div>

          <div className="setting">
            <Button
              variant="contained"
              color="secondary"
              className="iconButton"
              onClick={this.onLogin}
            >
              <AccountCircleIcon />
              <span className="settingTxt">Login</span>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
