import React, { Component } from "react";
import "./External.scss";

class External extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resources: []
    };
  }

  async componentDidMount() {
    await fetch("/api/get-external-resources")
      .then(response => response.json())
      .then(json =>
        json.forEach(res => {
          JSON.stringify(res);
          let resource = {
            id: res._id,
            title: res.title,
            url: res.URL
          };
          var joined = this.state.resources.concat(resource);
          this.setState({
            resources: joined
          });
        })
      );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>EXTERNAL RESOURCES COMPONENT</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default External;
