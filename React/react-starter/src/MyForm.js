import React, { Component } from "react";

export default class MyForm extends Component {
  constructor(props) {
    super(props);

    // stateの初期化
    this.state = {
      name: "山田太郎",
      email: "yamada@example.com",
    };

    this.hundleChange = this.hundleChange.bind(this);
    this.show = this.show.bind(this);
  }

  hundleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  show() {
    console.log(`name: ${this.state.name}`);
    console.log(`email: ${this.state.email}`);
  }
  render() {
    return (
      <form>
        <div>
          <label htmlFor="name">名前：</label>
          <input id="name" name="name" type="text" onChange={this.hundleChange} value={this.state.name}></input>
        </div>
        <div>
          <label htmlFor="email">メールアドレス：</label>
          <input id="email" name="email" type="text" onChange={this.hundleChange} value={this.state.email}></input>
        </div>
        <div>
          <button type="button" onClick={this.show}>
            送信
          </button>
        </div>
      </form>
    );
  }
}
