import React, { Component } from "react";
import "./LabelInput.css";

class LabelSelect extends Component {
  render() {
    return (
      <div className="label-input">
        <label className="label">{this.props.label}</label>
        <select className="input">
          <option value="category1">category1</option>
          <option value="category1">category2</option>
          <option value="category1">category3</option>
        </select>
      </div>
    );
  }
}

export default LabelSelect;
