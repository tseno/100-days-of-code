import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PageOne extends Component {
  toPageTwo() {
    this.props.history.push("/pagetwo");
  }

  componentDidMount() {
    alert("PageOne created");
  }

  componentWillUnmount() {
    alert("PageOne destroyed");
  }

  render() {
    return (
      <div>
        <h3>PageOne</h3>
        <Link to="/pagetwo">PageTwo</Link>
        <button onClick={this.toPageTwo.bind(this)}>To PageTwo</button>
      </div>
    );
  }
}
