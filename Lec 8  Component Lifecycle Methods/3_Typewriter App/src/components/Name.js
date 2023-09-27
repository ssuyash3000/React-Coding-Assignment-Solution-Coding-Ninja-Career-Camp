import React from "react";

export default class Name extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: "Coding Ninjas",
      curIndex: 0,
      currentName: "",
      setIntervalStatus: null,
    };
  }

  // This function adds a character to the string.
  typeWriterEffect = () => {
    this.setState((prevState) => {
      return {
        curIndex: prevState.curIndex + 1,
        currentName: prevState.fullName.substring(0, prevState.curIndex),
      };
    });
  };

  // Required lifecycle methods here
  componentDidUpdate(prevProps) {
    if (prevProps.showName !== this.props.showName) {
      if (this.props.showName === true) {
        let setIntervalStatus = setInterval(this.typeWriterEffect, 500);
        this.setState({ setIntervalStatus });
      } else {
        clearInterval(this.state.setIntervalStatus);
      }
    }
  }

  render() {
    return <h1>{this.state.currentName}</h1>;
  }
}
