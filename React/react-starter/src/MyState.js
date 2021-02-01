import React, { Component } from "react";

export default class MyState extends Component {
  constructor(props) {
    super(props);
    // stateの初期値
    this.state = {
      current: new Date(),
    };
    // 1000ミリごとにstateを更新
    setInterval(() => {
      this.setState({
        current: new Date(),
      });
    }, 1000);
  }

  render() {
    return <div>現在時刻は、{this.state.current.toLocaleString()}</div>;
  }
}
