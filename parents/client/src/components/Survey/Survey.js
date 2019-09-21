import React, { Component } from "react";
import "./Survey.css";

class Survey extends Component {
  constructor(props) {
    super(props);

    this.state = {
      surveys: []
    };
  }
  async componentDidMount() {
    await fetch("/api/get-surveys")
      .then(response => response.json())
      .then(json =>
        json.forEach(sur => {
          JSON.stringify(sur);
          let survey = {
            id: sur._id,
            title: sur.title,
            url: sur.URL
          };
          var joined = this.state.surveys.concat(survey);
          this.setState({
            surveys: joined
          });
        })
      );
  }

  render() {
    console.log(this.state.surveys);
    return (
      <div className="App">
        <header className="App-header">
          <p>SURVEY COMPONENT</p>
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

export default Survey;
