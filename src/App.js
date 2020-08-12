import React from "react";
import "./App.css";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Button from "@material-ui/core/Button";
import SettingsSharpIcon from "@material-ui/icons/SettingsSharp";

import Nav from "./componenets/Nav";
import TimerTabs from "./componenets/TimerBox";
import Divider from "@material-ui/core/Divider";

class App extends React.Component {
  state = {
    selectedItem: 1,
  };

  onChangeTimer = (i) => {
    this.setState({ selectedItem: i });
  };

  render() {
    const { selectedItem } = this.state;
    var bgColor;
    switch (selectedItem) {
      case 2:
        bgColor = " green";
        break;
      case 3:
        bgColor = " blue";
        break;
      default:
        bgColor = " red";
    }

    return (
      <div className={"App" + bgColor}>
        <Nav />
        <Divider className="divider" />
        <TimerTabs onChangeTimer={this.onChangeTimer} />
      </div>
    );
  }
}

export default App;
