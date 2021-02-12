import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class EditSite extends Component {
  constructor(props) {
    super(props);

    this.state = {
      siteName: "",
      siteURL: "",
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(`http://localhost:3000/sites/${id}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          siteName: data.name,
          siteURL: data.url,
        });
      })
      .catch((err) => console.log(err));
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
  editSite() {
    if (this.state.siteName === "" || this.state.siteURL === "") return;

    const id = this.props.match.params.id;

    const siteInfo = {
      name: this.state.siteName,
      url: this.state.siteURL,
    };

    fetch(`http://localhost:3000/sites/${id}`, {
      method: "PUT",
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
            <button onClick={this.editSite.bind(this)} type="button" className="btn btn-primary">
              EDIT
            </button>
          </div>
        </div>
      </div>
    );
  }
}
