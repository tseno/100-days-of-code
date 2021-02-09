import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import Divider from "@material-ui/core/Divider";
import Fab from "@material-ui/core/Fab";
import "./TodoList.css";

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    this.setState({
      todos: todos,
    });
  }

  addTodo() {
    this.props.history.push("/todos/add");
  }

  deleteTodo(i) {
    const todos = this.state.todos;
    todos.splice(i, 1);
    this.setState({
      todos: todos,
    });
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  }
  render() {
    return (
      <div>
        <AppBar position="static">
          <ToolBar>
            <div className="toolbar-left"></div>
            <Typography variant="h5" color="inherit" className="toolbar-center">
              My Todo
            </Typography>
          </ToolBar>
        </AppBar>
        <List>
          {this.state.todos.map((todo, i) => {
            return (
              <div key={i}>
                <ListItem>
                  <ListItemText>{todo}</ListItemText>
                  <IconButton aria-label="Delete" onClick={this.deleteTodo.bind(this, i)}>
                    <DeleteIcon></DeleteIcon>
                  </IconButton>
                </ListItem>
                <Divider></Divider>
              </div>
            );
          })}
        </List>
        <div className="bottom-right">
          <Fab color="primary" aria-label="Add" onClick={this.addTodo.bind(this)}>
            <AddIcon />
          </Fab>
        </div>
      </div>
    );
  }
}
