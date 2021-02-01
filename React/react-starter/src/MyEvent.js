import React, { Component } from "react";

export default class MyEvent extends Component {
  constructor(props) {
    super(props);
    this.show = this.show.bind(this, "さん", "です");
  }

  show(suffix, suffix2, e) {
    console.log(`${this.props.greet},${e.target.value} ${suffix}  ${suffix2}!!`);
  }

  render() {
    return (
      <form>
        <label htmlFor="txtName">名前：</label>
        <input id="txtName" type="text" onChange={this.show}></input>
      </form>
    );
  }
}
