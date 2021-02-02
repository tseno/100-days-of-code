import React, { Component } from "react";

export default class MyList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fruit: ["apple", "grape"],
    };

    this.handleChange = this.handleChange.bind(this);
    this.show = this.show.bind(this);
  }

  handleChange(e) {
    const data = [];
    const opts = e.target.options;
    for (let i = 0; i < opts.length; i++) {
      if (opts[i].selected) {
        data.push(opts[i].value);
      }
    }

    this.setState({
      [e.target.name]: data,
    });
  }
  show() {
    console.log(`好きな果物：${this.state.fruit}`);
  }

  render() {
    return (
      <form>
        <label htmlFor="fruit">好きな果物：</label>
        <select id="fruit" name="fruit" onChange={this.handleChange} value={this.state.fruit} size="5" multiple={true}>
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
