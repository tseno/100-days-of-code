import React, { Component } from "react";
import { Route } from "react-router-dom";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";

export default class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={PageOne} exact={true} />
        <Route path="/pagetwo" component={PageTwo} />
      </div>
    );
  }
}
