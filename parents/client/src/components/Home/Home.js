import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Home COMPONENT</p>
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

export default Home;
