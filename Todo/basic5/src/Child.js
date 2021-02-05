import React, { Component } from "react";

export default class Child extends Component {
  addValueChild() {
    // addに渡された関数に10を入れる
    this.props.add(10);
  }

  render() {
    return (
      <div>
        {this.props.pval}
        <button onClick={this.addValueChild.bind(this)}>ADD</button>
      </div>
    );
  }
}
