import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Typography from "@material-ui/core/Typography";
import ArrowBack from "@material-ui/icons/ArrowBack";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./TodoForm.css";

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
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <AppBar position="static">
          <ToolBar>
            <Link to="/" className="toolbar-left">
              <ArrowBack style={{ color: "white" }}></ArrowBack>
            </Link>
            <Typography variant="h5" color="inherit" className="toolbar-center">
              My Todo
            </Typography>
          </ToolBar>
        </AppBar>
        <Card>
          <CardContent>
            <TextField value={this.state.newTodo} onChange={this.handleChange.bind(this)} placeholder="Input here..." className="input-field"></TextField>
          </CardContent>
        </Card>
        <CardActions>
          <Button variant="contained" color="primary" onClick={this.addTodo.bind(this)}>
            ADD
          </Button>
        </CardActions>
      </div>
    );
  }
}
