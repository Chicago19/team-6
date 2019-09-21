import React, { Component } from "react";
import "./PDFview.scss";

class PDFview extends Component {
  state = {};
  render() {
    return (
      <div>
       <iframe src={this.props.url}></iframe>
     </div>
    );
  }
}

export default PDFview;
