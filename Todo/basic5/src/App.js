import React, { Component } from "react";
import Child from "./Child";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentValue: 100,
    };
  }

  addValueParent(value) {
    const newValue = this.state.parentValue + value;
    this.setState({
      parentValue: newValue,
    });
  }

  render() {
    return <Child add={this.addValueParent.bind(this)} pval={this.state.parentValue}></Child>;
  }
}
