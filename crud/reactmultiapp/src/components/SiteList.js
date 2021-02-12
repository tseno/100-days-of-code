import React, { Component } from "react";

export default class SiteList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sites: [],
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3000/sites`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          sites: data,
        });
      })
      .catch((err) => console.log(err));
  }

  addSite() {
    this.props.history.push("/sites/add");
  }

  editSite(id) {
    this.props.history.push(`/sites/edit/${id}`);
  }

  deleteSite(id) {
    fetch(`http://localhost:3000/sites/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        let sites = this.state.sites;
        sites = sites.filter((site) => site.id !== id);
        this.setState({
          sites: sites,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <button onClick={this.addSite.bind(this)} className="btn btn-primary add">
          ADD
        </button>
        <h5 className="text-center">Site List</h5>
        <ul className="list-group">
          {this.state.sites.map((site) => {
            return (
              <li key={site.id} className="list-group-item">
                <a href={site.url} target="_blank" rel="noreferrer">
                  {site.name}
                </a>
                <button onClick={this.deleteSite.bind(this, site.id)} className="float-right btn btn-danger btn-sm">
                  DEL
                </button>
                <button onClick={this.editSite.bind(this, site.id)} className="float-right btn btn-primary btn-sm mr-2">
                  EDIT
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
