import React, { Component } from "react";

class Documents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      documents: []
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
            name: doc.file_title,
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
    return (
      <div className="App">
        <header className="App-header">
          <p>DOCUMENTS COMPONENT</p>
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

export default Documents;
