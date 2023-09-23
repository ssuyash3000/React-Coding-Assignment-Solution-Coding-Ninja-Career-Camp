import "./styles.css";
import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";

export default class App extends Component {
  // add constructor and state here
  constructor() {
    super();
    this.state = {
      todos: [
        { text: "Do the laundry" },
        { text: "Iron the clothes" },
        { text: "Go for a walk" },
      ],
    };
  }
  // create handleAdd and handleRemove functions here
  handleAdd = (todo) => {
    let newArr = [...this.state.todos];
    newArr.push(todo);
    this.setState({ todos: newArr }, () => {
      console.log("");
    });
  };
  handleRemove = (todoText) => {
    let newArr = [...this.state.todos];

    newArr = newArr.filter((todo) => {
      return todo.text !== todoText;
    });

    this.setState({ todos: newArr }, () => {
      console.log("");
    });
  };

  render() {
    return (
      <div className="App">
        <span>Todo</span>
        <Form handleAdd={this.handleAdd} />
        <List todos={this.state.todos} handleRemove={this.handleRemove} />
      </div>
    );
  }
}
