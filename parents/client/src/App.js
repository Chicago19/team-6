import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Documents from "./components/Documents";
import External from "./components/External";
import Survey from "./components/Survey";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const routes = [
  {
    path: "/documents",
    component: Documents
  },
  {
    path: "/external",
    component: External
  },
  {
    path: "/survey",
    component: Survey
  }
];

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
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/documents">Documents</Link>
            </li>
            <li>
              <Link to="/external">External Resources</Link>
            </li>
            <li>
              <Link to="/survey">Survey</Link>
            </li>
          </ul>
          <hr />
          {routes.map(({ path, component: C }) => (
            <Route path={path} component={C} />
          ))}
        </div>
      </Router>
    );
  }
}

export default App;
