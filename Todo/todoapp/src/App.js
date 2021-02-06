import React, { Component } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default class App extends Component {
  render() {
    return (
      <div>
        <TodoForm></TodoForm>
        <TodoList></TodoList>
      </div>
    );
  }
}
