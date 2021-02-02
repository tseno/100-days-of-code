import React, { Component } from "react";

export default class MyTextarea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      memo: "Reactは人気のフレームワーク・・・",
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
    console.log(`メモ：${this.state.memo}`);
  }

  render() {
    return (
      <form>
        <label htmlFor="memo">メモ</label>
        <br />
        <textarea id="memo" name="memo" onChange={this.handleChange} value={this.state.memo} cols="30" rows="7"></textarea>
        <br />
        <button type="button" onClick={this.show}>
          送信
        </button>
      </form>
    );
  }
}
