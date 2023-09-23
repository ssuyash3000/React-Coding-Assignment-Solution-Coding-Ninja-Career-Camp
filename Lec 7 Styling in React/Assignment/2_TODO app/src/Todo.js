import { Component } from "react";

export class Todo extends Component {
  render() {
    return (
      <div className="todo">
        <p>{this.props.todo.text}</p>
        <button onClick={() => this.props.handleRemove(this.props.todo.text)}>
          x
        </button>
      </div>
    );
  }
}
