import React, { Component } from "react";

export default class MySelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fruit: "grape",
    };

    this.handleChange = this.handleChange.bind(this);
    this.show = this.show.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  show() {
    console.log(`好きな果物：${this.state.fruit}`);
  }

  render() {
    return (
      <form>
        <label htmlFor="fruit">好きな果物：</label>
        <select id="fruit" name="fruit" onChange={this.handleChange} value={this.state.fruit}>
          <option value="apple">🍎</option>
          <option value="orange">🍊</option>
          <option value="melon">🍈</option>
          <option value="grape">🍇</option>
          <option value="strawberry">🍓</option>
        </select>
        <button type="button" onClick={this.show}>
          送信
        </button>
      </form>
    );
  }
}
