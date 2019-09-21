import React, { Component } from "react";
import { Link , browserHistory } from "react-router"
import './Header.scss'

class Survey extends Component {
  state = {};
  render() {
    return (
      <div className="nav-header">
        <Link className="ccac-logo" to="/">
            <img src="/ccac-logo.png" alt="Chicago Children's Advocacy Center" style={{ float: 'left' }} />
        </Link>
        <Link to="/documents">My Documents</Link>
      </div>
    );
  }
}

export default Survey;
