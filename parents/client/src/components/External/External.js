import React, { Component } from "react";

class External extends Component {
  state = {};
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
