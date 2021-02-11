import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      siteName: "",
      siteURL: "",
      sites: [],
      updateId: "",
      updateName: "",
      updateURL: "",
      deleteId: "",
    };
  }

  handleNewNameInput(e) {
    this.setState({
      siteName: e.target.value,
    });
  }
  handleNewURLInput(e) {
    this.setState({
      siteURL: e.target.value,
    });
  }
  handleUpdateIdInput(e) {
    this.setState({
      updateId: e.target.value,
    });
  }
  handleUpdateNameInput(e) {
    this.setState({
      updateName: e.target.value,
    });
  }
  handleUpdateURLInput(e) {
    this.setState({
      updateURL: e.target.value,
    });
  }
  handleDeleteIdInput(e) {
    this.setState({
      deleteId: e.target.value,
    });
  }

  componentDidMount() {
    fetch("http://localhost:3000/sites")
      .then((res) => res.json())
      .then((sites) => {
        this.setState({
          sites: sites,
        });
      });
  }

  createData() {
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
      .then((res) => res.json())
      .then((data) => {
        const sites = this.state.sites;
        sites.push(data);
        this.setState({
          sites: sites,
          siteName: "",
          siteURL: "",
        });
      })
      .catch((err) => console.log(err));
  }

  updateData() {
    if (this.state.updateId === "" || this.state.updateName === "" || this.state.updateURL === "") return;

    const siteInfo = {
      name: this.state.updateName,
      url: this.state.updateURL,
    };

    fetch(`http://localhost:3000/sites/${this.state.updateId}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(siteInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        const sites = this.state.sites;
        const index = sites.findIndex((site) => site.id === data.id);
        sites[index] = data;
        this.setState({
          updateId: "",
          updateName: "",
          updateURL: "",
        });
      })
      .catch((err) => console.log(err));
  }

  deleteData() {
    if (this.state.deleteId === "") return;

    fetch(`http://localhost:3000/sites/${this.state.deleteId}`, {
      method: "DELETE",
    }).then(() => {
      const sites = this.state.sites;
      const index = sites.findIndex((site) => site.id === Number(this.state.deleteId));
      sites.splice(index, 1);
      this.setState({
        deleteId: "",
      });
    });
  }

  render() {
    return (
      <div>
        <h3>Create data</h3>
        <div>
          <input type="text" onChange={this.handleNewNameInput.bind(this)} value={this.state.siteName} placeholder="Site Name" />
        </div>
        <div>
          <input type="text" onChange={this.handleNewURLInput.bind(this)} value={this.state.siteURL} placeholder="Site URL" />
        </div>
        <button onClick={this.createData.bind(this)}>Create</button>

        <hr />

        <h3>Read data</h3>
        <ul>
          {this.state.sites.map((site) => {
            return (
              <li key={site.id}>
                {site.id} {site.name} {site.url}
              </li>
            );
          })}
        </ul>

        <hr />

        <h3>Update data</h3>
        <div>
          <input type="text" onChange={this.handleUpdateIdInput.bind(this)} value={this.state.updateId} placeholder="ID" />
        </div>
        <div>
          <input type="text" onChange={this.handleUpdateNameInput.bind(this)} value={this.state.updateName} placeholder="Site Name" />
        </div>
        <div>
          <input type="text" onChange={this.handleUpdateURLInput.bind(this)} value={this.state.updateURL} placeholder="Site URL" />
        </div>
        <button onClick={this.updateData.bind(this)}>Update</button>

        <hr />

        <h3>Delete data</h3>
        <div>
          <input type="text" onChange={this.handleDeleteIdInput.bind(this)} value={this.state.deleteId} placeholder="ID" />
        </div>
        <button onClick={this.deleteData.bind(this)}>Delete</button>
      </div>
    );
  }
}
