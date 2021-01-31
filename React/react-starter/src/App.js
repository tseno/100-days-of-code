import React, { Component } from "react";
import PropTypes from "prop-types";
import MyBook from "./MyBook";

class MyHello extends Component {
  render() {
    const style = { color: "red", backgroundColor: "yellow" };
    console.log(this.props);

    return (
      <div>
        <p>こんにちは、{this.props.name}さん</p>
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

MyHello.propTypes = {
  name: PropTypes.string.isRequired,
};

MyHello.defaultProps = {
  name: "名無し",
};

MyHello.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }),
};
