import React, { Component } from "react";
import "./App.scss";
import Documents from "./components/Documents/Documents";
import External from "./components/External/External";
import Home from "./components/Home/Home";
import Survey from "./components/Survey/Survey";
import Verify from "./components/Verify/Verify";
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
  },
  {
    path: "/verify",
    component: Verify
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
    this.events = [
      "load",
      "mousemove",
      "mousedown",
      "click",
      "scroll",
      "keypress"
    ];
    this.warn = this.warn.bind(this);
    this.logout = this.logout.bind(this);
    this.resetTimeout = this.resetTimeout.bind(this);

    this.setTimeout();
  }

  componentWillMount() {
    this.events.forEach((event) => {
       window.addEventListener(event, this.resetTimeout);
     });
     this.setTimeout();
  }

 clearTimeout() {
   if (this.warnTimeout) clearTimeout(this.warnTimeout);

   if (this.logoutTimeout) clearTimeout(this.logoutTimeout);
 }

 setTimeout() {
   this.warnTimeout = setTimeout(this.warn, 45 * 1000);

   this.logoutTimeout = setTimeout(this.logout, 105 * 1000);
 }

 resetTimeout() {
   this.clearTimeout();
   this.setTimeout();
 }

 warn() {
   alert("You will be logged out automatically in 1 minute.");
 }

 logout() {
   window.location.href="/verify"
 }

  render() {
    return (
      <Router>
        <div id="navbar">
        {window.location.pathname != '/verify' ?
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
        :
        (<div />)
      }

          {routes.map(({ path, component: C }) => (
            <Route path={path} component={C} />
          ))}
        </div>
      </Router>
    );
  }
}

export default App;
