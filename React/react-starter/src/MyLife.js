import React, { Component } from "react";

export default class MyLife extends Component {
  constructor(props) {
    super(props);

    // stateの初期化
    this.state = {
      current: new Date(),
    };
  }

  componentDidMount() {
    // タイマーの初期化
    this.timer = setInterval(() => {
      this.setState({
        current: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return <div>現在時刻は、{this.state.current.toLocaleString()}です。</div>;
  }
}
