import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import MyPage from "./MyPage";

export default class MyArticle extends Component {
  render() {
    const id = this.props.match.params.id;
    const path = this.props.match.path;
    const url = this.props.match.url;
    return (
      <div>
        <h3>No. {id}の記事情報です！</h3>[<Link to={`${url}/pages/1`}>1</Link>] [<Link to={`${url}/pages/2`}>2</Link>]
        <hr />
        <Route path={`${path}/pages/:page`} component={MyPage} />
      </div>
    );
  }
}
