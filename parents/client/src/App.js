import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }
  componentDidMount() {
    fetch("/api/boilerplate")
      .then(res => res.json())
      .then(data => this.setState({ data: data }));
  }

  render() {
    return <div>{this.state.data}</div>;
  }
}

export default App;
