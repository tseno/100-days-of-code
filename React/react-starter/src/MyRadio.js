import React, { Component } from "react";

export default class MyRadio extends Component {
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
        <fieldset>
          <legend>性別：</legend>
          <input id="apple" name="fruit" type="radio" value="apple" checked={this.state.fruit === "apple"} onChange={this.handleChange}></input>
          <label htmlFor="fruit_apple">🍎</label>
          <input id="orange" name="fruit" type="radio" value="orange" checked={this.state.fruit === "orange"} onChange={this.handleChange}></input>
          <label htmlFor="fruit_orange">🍊</label>
          <input id="melon" name="fruit" type="radio" value="melon" checked={this.state.fruit === "melon"} onChange={this.handleChange}></input>
          <label htmlFor="fruit_melon">🍈</label>
          <input id="grape" name="fruit" type="radio" value="grape" checked={this.state.fruit === "grape"} onChange={this.handleChange}></input>
          <label htmlFor="fruit_grape">🍇</label>
          <input id="strawberry" name="fruit" type="radio" value="strawberry" checked={this.state.fruit === "strawberry"} onChange={this.handleChange}></input>
          <label htmlFor="fruit_strawberry">🍓</label>
        </fieldset>
        <button type="button" onClick={this.show}>
          送信
        </button>
      </form>
    );
  }
}
