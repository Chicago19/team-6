import React, { Component } from "react";

import "./Documents.css";

import "./Documents.scss";


class Documents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      documents: [],
      show_pdf: false,
      pdf_url: "",
    };
  }

  async componentDidMount() {
    await fetch("/api/get-documents")
      .then(response => response.json())
      .then(json =>
        json.forEach(doc => {
          JSON.stringify(doc);
          let document = {
            id: doc.file_title,
            title: doc.file_title,
            url: doc.file_URL
          };
          var joined = this.state.documents.concat(document);
          this.setState({
            documents: joined
          });
        })
      );
  }

  render() {
    const docs = this.state.documents.map(function(document){
      return <li className="document-titles" onClick={this.setState({show_pdf : true, pdf_url: document.url});}> {document.title} </li>;
    });
    return (
      <div id="documents-container">
      <div id="documents-sidebar">
        <ul>
          {docs}
        </ul>
      </div>
      <div id="pdf-viewer">
      </div>
      </div>
    );
  }
}

export default Documents;
