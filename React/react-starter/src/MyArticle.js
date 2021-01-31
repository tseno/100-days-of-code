import React, { Component } from "react";
import MyNew from "./MyNew";

export default class MyArticles extends Component {
  render() {
    return (
      <React.Fragment>
        <dt>
          <a href={this.props.url}>{this.props.title}</a>
          {(() => {
            if (this.props.isNew) {
              return <MyNew />;
            }
          })()}
        </dt>
        <dd>{this.props.description}</dd>
      </React.Fragment>
    );
  }
}
