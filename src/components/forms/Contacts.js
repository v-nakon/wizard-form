import React, { Component } from "react";
import "./Form.css";
import LabelInput from "../for-forms/LabelInput";
import BtnNext from "../for-forms/BtnNext";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Contacts extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Contacts</h1>
        <LabelInput label="Email" typeInput="email" />
        <LabelInput label="Password" typeInput="password" />
        <LabelInput label="Password Confirm" typeInput="password" />
        <Link to="/address">
          <BtnNext />
        </Link>
      </React.Fragment>
    );
  }
}

export default Contacts;
