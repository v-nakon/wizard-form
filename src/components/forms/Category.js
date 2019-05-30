import React, { Component } from "react";
import "./Form.css";
import LabelInput from "../for-forms/LabelInput";
import LabelSelect from "../for-forms/LabelSelect";
import BtnNext from "../for-forms/BtnNext";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Category extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Category</h1>
        <LabelSelect label="Country" />
        <LabelInput label="Category 2" typeInput="text" />
        <LabelInput label="Category 3" typeInput="text" />
        <Link to="/success">
          <BtnNext />
        </Link>
      </React.Fragment>
    );
  }
}

export default Category;
