import { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  render() {
    return (
      <div className="form">
        <input
          onChange={this.handleChange}
          value={this.state.text}
          placeholder="Whats on your mind?"
          required
        />
        <button
          onClick={() => {
            this.props.handleAdd(this.state);
            this.setState({
              text: "",
            });
          }}>
          Add
        </button>
      </div>
    );
  }
}
