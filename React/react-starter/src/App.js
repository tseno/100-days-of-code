import React, { Component } from "react";
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom";

import MyFile from "./MyFile";
import MyList from "./MyList";
import MyArticle from "./MyArticle";

export default class App extends Component {
  render() {
    const current = { color: "Red" };
    return (
      <Router>
        <div>
          <ul>
            <li>
              <NavLink exact to="/" activeStyle={current}>
                トップ
              </NavLink>
            </li>
            <li>
              <NavLink to="/list" activeStyle={current}>
                リスト
              </NavLink>
            </li>
            <li>
              <NavLink to="/select/1100" activeStyle={current}>
                セレクト
              </NavLink>
            </li>
            <li>
              <NavLink to="/article/13" activeStyle={current}>
                記事No.13
              </NavLink>
            </li>
            <li>
              <NavLink to="/article/108" activeStyle={current}>
                記事No.108
              </NavLink>
            </li>
            <hr />
            <Switch>
              <Route exact path="/" component={MyFile} />
              <Route path="/list" component={MyList} />
              <Route path="/article/:id" component={MyArticle} />
              <Route path="/article/:id" component={MyArticle} />
            </Switch>
          </ul>
        </div>
      </Router>
    );
  }
}
