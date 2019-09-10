import React, { Component } from "react";
import PropTypes from "prop-types";
import { Input } from "antd";
class TextInput extends Component {
  render() {
    return (
      <div>
        <div className="form-group">
          <label className="form-label">{this.props.title}</label>
          <Input
            className="form-input"
            name={this.props.name}
            type={this.props.inputType}
            value={this.props.content}
            onChange={this.props.controlFunc}
            placeholder={this.props.placeholder}
          />
        </div>
      </div>
    );
  }
}
TextInput.propTypes = {
  inputType: PropTypes.oneOf(["text"]).isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  controlFunc: PropTypes.func.isRequired,
  content: PropTypes.oneOfType([PropTypes.string]).isRequired,
  placeholder: PropTypes.string
};

export default TextInput;
