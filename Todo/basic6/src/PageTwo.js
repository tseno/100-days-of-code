import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PageTwo extends Component {
  toPageOne() {
    this.props.history.push("/");
  }

  componentDidMount() {
    alert("PageTwo created");
  }

  componentWillUnmount() {
    alert("PageTwo destroyed");
  }

  render() {
    return (
      <div>
        <h3>PageTwo</h3>
        <Link to="/">PageOne</Link>
        <button onClick={this.toPageOne.bind(this)}>To PageOne</button>
      </div>
    );
  }
}
