import React, { Component } from "react";

class MyBook extends Component {
  render() {
    const url = `https://wings.msn.to/books/${this.props.isbn}/${this.props.isbn}.jpg`;

    return <img src={url} title={this.props.title} />;
  }
}

export default MyBook;
