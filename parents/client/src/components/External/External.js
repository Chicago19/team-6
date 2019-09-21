import React, { Component } from "react";
import PDFview from "../PDFview/PDFview"
import "./External.scss";

class External extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resources: [],
      show_res: false,
      res_url: "",
    };
    this.handleOnClick = this.handleOnClick.bind(this);
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

  handleOnClick(url){
    this.setState({
      show_res : true,
      res_url: url,
     });
  }

  render() {
    const resources = this.state.resources.map((resource) => {
      return <li className="resource-titles" onClick={() => this.handleOnClick(resource.url)}>
      {resource.title}
       </li>;
    });
    return (
      <div id="resources-container">
      <div id="resources-sidebar">
        <h2 id="header"> Select a PDF </h2>
        <ul>
          {resources}
        </ul>
      </div>
      <div className="pdf-viewer">
        {this.state.show_res ? (<PDFview url={this.state.res_url} />) : (<div />)}
      </div>
      </div>
    );
  }
}

export default External;
