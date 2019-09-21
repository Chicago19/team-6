import React, { Component } from "react";
import PDFview from "../PDFview/PDFview"
import "./Documents.scss";


class Documents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      documents: [],
      show_pdf: false,
      pdf_url: "",
    };
    this.handleOnClick = this.handleOnClick.bind(this);
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

  handleOnClick(url){
    this.setState({
      show_pdf : true,
      pdf_url: url,
     });
  }

  render() {
    const docs = this.state.documents.map((document) => {
      return <li className="document-titles" onClick={() => this.handleOnClick(document.url)}>
      {document.title}
       </li>;
    });

    return (
      <div id="documents-container">
      <div id="documents-sidebar">
      <h2 id="header"> Select a PDF </h2>
        <ul>
          {docs}
        </ul>
      </div>
      <div className="pdf-viewer">
        {this.state.show_pdf ? (<PDFview url={this.state.pdf_url} />) : (<div />)}
      </div>
      </div>
    );
  }
}

export default Documents;
