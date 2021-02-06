import React, { Component } from "react";

export default class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTodo: "",
    };
  }

  handleChange(e) {
    this.setState({
      newTodo: e.target.value,
    });
  }

  addTodo() {
    const newTodo = this.state.newTodo;
    if (newTodo === "") return;
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
    this.setState({
      newTodo: "",
    });
  }

  render() {
    return (
      <div>
        <h3>My Todo</h3>
        <input type="text" value={this.state.newTodo} onChange={this.handleChange.bind(this)} placeholder="Input here..." />
        <button onClick={this.addTodo.bind(this)}>ADD</button>
      </div>
    );
  }
}
