import React, { Component } from "react";
import "./Form.css";

class Success extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Success</h1>
        <p>Your account was successfuly registered!</p>
        <p>Please wait for account approval.</p>
        <p>It can take up to 24 hours.</p>
      </React.Fragment>
    );
  }
}

export default Success;
