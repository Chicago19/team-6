import React, { Component } from "react";
import "./Survey.scss";

class Survey extends Component {
  constructor(props) {
    super(props);

    this.state = {
      surveys: []
    };

    this.getStyles = this.getStyles.bind(this);
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

  getStyles() {
    const styles = {
      height: 200
    };
    return styles;
  }

  render() {
    return (
      <div id="survey">
        <header id="survey-header">
          <p id="survey-title">PATIENT SURVEY</p>
          <iframe
            height="100%"
            width="100%"
            src="http://umich.qualtrics.com/jfe/form/SV_9zV7LyXO3OhaiaN?Q_JFE=qdg"
          ></iframe>
        </header>
      </div>
    );
  }
}

export default Survey;
