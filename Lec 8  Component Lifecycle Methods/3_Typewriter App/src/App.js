import React from "react";
import Name from "./components/Name";
import "./styles.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showName: false,
    };
  }

  // Function to toggle the showName state
  toggleShowName = () => {
    const newState =
      this.state.showName === false ? { showName: true } : { showName: false };
    this.setState(newState);
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleShowName} className="button-85">
          {this.state.showName ? "Stop" : "Start"}
        </button>
        <Name showName={this.state.showName} />
      </div>
    );
  }
}
