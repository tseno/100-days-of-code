import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clickResult: "",
      changeResult: "change default value",
      inputResult: "input default value",
      keyupResult: "keyup default value",
    };
  }

  onClick() {
    this.setState({
      clickResult: "clicked",
    });
  }

  onChange(e) {
    this.setState({
      changeResult: e.target.value,
    });
  }

  onInput(e) {
    this.setState({
      inputResult: e.target.value,
    });
  }

  onKeyup(e) {
    this.setState({
      keyupResult: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.onClick.bind(this)}>
          click
        </button>
        {this.state.clickResult}
        <br />
        <input type="text" onChange={this.onChange.bind(this)} placeholder="change" defaultValue={this.state.changeResult} />
        {this.state.changeResult}
        <br />
        <input type="text" onInput={this.onInput.bind(this)} placeholder="input" defaultValue={this.state.inputResult} />
        {this.state.inputResult}
        <br />
        <input type="text" onKeyUp={this.onKeyup.bind(this)} placeholder="keyup" defaultValue={this.state.keyupResult} />
        {this.state.keyupResult}
        <br />
      </div>
    );
  }
}
