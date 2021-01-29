import React, { Component } from "react";
import MyBook from "./MyBook";

class MyHello extends Component {
  render() {
    const style = { color: "red", backgroundColor: "yellow" };
    console.log(this.props);

    return (
      <div>
        <MyBook isbn={this.props.info.isbn} title={this.props.info.title}></MyBook>
        <ul>
          <li>書名：{this.props.info.title}</li>
          <li>価格：{this.props.info.price}</li>
          <li>出版社：{this.props.info.published}</li>
        </ul>
      </div>
    );
  }
}

export default MyHello;
