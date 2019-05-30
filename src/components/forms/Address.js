import React, { Component } from "react";
import "./Form.css";
import LabelInput from "../for-forms/LabelInput";
import BtnNext from "../for-forms/BtnNext";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Address extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Address</h1>
        <LabelInput label="Country" typeInput="text" />
        <LabelInput label="City" typeInput="text" />
        <LabelInput label="Address" typeInput="password" />
        <Link to="/category">
          <BtnNext />
        </Link>
      </React.Fragment>
    );
  }
}

export default Address;
