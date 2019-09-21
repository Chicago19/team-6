import React, { Component } from "react";
import "./PDFview.scss";

class PDFview extends Component {
  state = {};
  render() {
    return (
       <iframe src={this.props.url}></iframe>
    );
  }
}

export default PDFview;
