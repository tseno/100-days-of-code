import React, { Component } from "react";

export default class MyChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "child data2",
    };

    // 親コンポーネントのUpdateを呼び出す
    this.props.onUpdate(this.state);
  }
  render() {
    return <p>MyChild: {this.state.data}</p>;
  }
}
