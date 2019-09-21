import React, { Component } from "react";
import "./App.css";
import Documents from "./components/Documents/Documents";
import External from "./components/External/External";
import Home from "./components/Home/Home";
import Survey from "./components/Survey/Survey";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const routes = [
  {
    path: "/home",
    component: Home
  },
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

  render() {
    return (
      <Router>
        <div id="navbar">
          <ul id="navbar-list">
            <li>
              <Link to="/home">
                <img
                  id="nav-home"
                  src="images/resized-logo.png"
                  alt="Chicago Children's Advocacy Center"
                  style={{ float: "left" }}
                />
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/documents">
                Documents
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/external">
                External Resources
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/survey">
                Survey
              </Link>
            </li>
          </ul>
          {routes.map(({ path, component: C }) => (
            <Route path={path} component={C} />
          ))}
        </div>
      </Router>
    );
  }
}

export default App;
