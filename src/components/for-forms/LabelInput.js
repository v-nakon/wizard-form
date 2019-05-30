import React, { Component } from "react";
import "./LabelInput.css";

class LabelInput extends Component {
  render() {
    return (
      <div className="label-input">
        <label className="label">{this.props.label}</label>
        <input className="input" type={this.props.typeInput} />
      </div>
    );
  }
}

export default LabelInput;
