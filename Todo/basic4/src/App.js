import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: "1", text: "todo 1" },
        { id: "2", text: "todo 2" },
        { id: "3", text: "todo 3" },
      ],
    };
  }

  deleteTodo(id) {
    let todos = this.state.todos;
    todos = todos.filter((todo) => todo.id !== id);
    this.setState({ todos: todos });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.todos.map((todo) => {
            return (
              <li key={todo.id}>
                {todo.text}
                <button type="button" onClick={this.deleteTodo.bind(this, todo.id)}>
                  x
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
