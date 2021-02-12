import React, { Component } from "react";
import { Route } from "react-router-dom";
import AddSite from "./components/AddSite";
import EditSite from "./components/EditSite";
import SiteList from "./components/SiteList";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h3 className="text-center">My Favorite Site</h3>
          </div>
        </div>
        <Route path="/" component={SiteList} exact />
        <Route path="/sites/add" component={AddSite} />
        <Route path="/sites/edit/:id" component={EditSite} />
      </div>
    );
  }
}
