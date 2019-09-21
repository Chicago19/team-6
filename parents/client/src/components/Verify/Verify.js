import React, { Component } from "react";
import "./Verify.scss";

class Verify extends Component {
  state = {
    value: '',
  };

  handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    }

  handleSubmit = (event) => {
    event.preventDefault();
    const { value } = this.state;
    if (value === 'JPMGC') {
      window.location.href = "http://http://167.99.56.53/home"
    }
    else {
      document.getElementById("error-msg").innerHTML = "Password incorrect. Please try again."
      }
    }

  componentWillMount() {
    window.history.pushState(null, null, document.URL);
    window.addEventListener('popstate', function () {
    window.history.pushState(null, null, document.URL);
});
  }

  render() {
    return (
      <div id='verify-container'>
      <p id="pw-text">Enter the password from the receptionist below:</p>
      <form onSubmit={this.handleSubmit}>
              <input type="password" value={this.state.value} onChange={this.handleChange}/>
          <input type="submit" value="Submit" />
      </form>
      <p id="error-msg" />
      </div>
    );
  }
}

export default Verify;
