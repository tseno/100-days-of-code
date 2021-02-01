import React, { Component } from "react";
import MyChild from "./MyChild";

export default class MyParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  update(state) {
    this.setState(state);
  }

  render() {
    return (
      <React.Fragment>
        <p>My Parent: {this.state.data}</p>
        <MyChild onUpdate={this.update.bind(this)}></MyChild>
      </React.Fragment>
    );
  }
}
