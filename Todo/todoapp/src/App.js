import React, { Component } from "react";
import { Route } from "react-router-dom";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={TodoList}></Route>
        <Route path="/todos/add" component={TodoForm}></Route>
      </div>
    );
  }
}
