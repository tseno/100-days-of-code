import React, { Component } from "react";

export default class MyPage extends Component {
  render() {
    const page = this.props.match.params.page;
    return <div>現在は、{page}ページです。</div>;
  }
}
