import React from "react";
import "./App.css";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Button from "@material-ui/core/Button";
import SettingsSharpIcon from "@material-ui/icons/SettingsSharp";

import Nav from "./componenets/Nav";
import TimerTabs from "./componenets/TimerBox";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <TimerTabs />
      </div>
    );
  }
}

export default App;
