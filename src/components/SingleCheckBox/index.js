import React, { Component } from "react";
import PropTypes from "prop-types";
import { Checkbox } from "antd";
class SingleCheckBox extends Component {
  render() {
    return (
      <div>
        <div className="form-group">
          <label className="form-label">{this.props.title}</label>
          <br/>
          <Checkbox
            className= {this.props.className}
            checked={this.props.checked}
            defaultChecked={this.props.defaultChecked}
            disabled={this.props.disabled}
            onChange={this.props.onChangeCheckBox}
            name={this.props.name}
          >{this.props.chklbl}</Checkbox>
        </div>
      </div>
    );
  }
}
SingleCheckBox.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked:PropTypes.bool.isRequired,
  defaultChecked:PropTypes.bool,
  onChangeCheckBox: PropTypes.func.isRequired,
  disabled:PropTypes.bool,
  className:PropTypes.string

};

export default SingleCheckBox;