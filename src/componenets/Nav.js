import React from "react";
import "./Nav.css";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Button from "@material-ui/core/Button";
import SettingsSharpIcon from "@material-ui/icons/SettingsSharp";
import Divider from "@material-ui/core/Divider";

export default class Nav extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="headerLogo">
          <CheckCircleIcon className="logo" />
          <h3 className="title">PomodoroTimer</h3>
        </div>
        <div className="setting">
          <Button
            variant="contained"
            color="secondary"
            className="iconButton"
            startIcon={<SettingsSharpIcon />}
          >
            Setting
          </Button>
        </div>
        <Divider className="divider" />
      </div>
    );
  }
}
