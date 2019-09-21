import React, { Component } from "react";
import "./Home.css";

import "./Home.scss";


class Home extends Component {
  state = {};
  render() {
    return (
      <div id="Home">

      <main class="wrapper">
      <section class="section parallax bg1">
        <h1>Welcome to Chicago Children’s Advocacy Center!</h1>
      </section>
      <section class="section static">
        <h1>We are the front-line responders in Chicago to reports of child sexual and physical abuse.</h1>
      </section>
      <section class="section parallax bg2">
        <h1>We are glad that you chose our services, and look forward to helping you.</h1>
      </section>
      <section class="section static">
        <h1>Use this guide to access a wide variety of helpful resources.</h1>
      </section>
      <section class="section parallax bg3">
        <h1>We hope you have a pleasant time with us.</h1>
      </section>
      </main>

      </div>

    );
  }
}

export default Home;
