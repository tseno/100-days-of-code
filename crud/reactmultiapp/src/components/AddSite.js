import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AddSite extends Component {
  constructor(props) {
    super(props);

    this.state = {
      siteName: "",
      siteURL: "",
    };
  }

  handleNameInput(e) {
    this.setState({
      siteName: e.target.value,
    });
  }
  handleURLInput(e) {
    this.setState({
      siteURL: e.target.value,
    });
  }
  addSite() {
    if (this.state.siteName === "" || this.state.siteURL === "") return;

    const siteInfo = {
      name: this.state.siteName,
      url: this.state.siteURL,
    };

    fetch("http://localhost:3000/sites", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(siteInfo),
    })
      .then(() => {
        this.setState({
          siteName: "",
          siteURL: "",
        });
        this.props.history.push("/");
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <br />
        <div className="card">
          <div className="card-body">
            <div className="form-group">
              <input type="text" onChange={this.handleNameInput.bind(this)} value={this.state.siteName} placeholder="Site Name" className="form-control"></input>
            </div>
            <div className="form-group">
              <input type="text" onChange={this.handleURLInput.bind(this)} value={this.state.siteURL} placeholder="Site URL" className="form-control"></input>
            </div>
            <button onClick={this.addSite.bind(this)} type="button" className="btn btn-primary">
              ADD
            </button>
          </div>
        </div>
      </div>
    );
  }
}
