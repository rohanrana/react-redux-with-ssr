import React, { Component } from "react";
import PropTypes from "prop-types";
import { Checkbox } from "antd";
class CheckBoxGroups extends Component {
  render() {
    return (
      <div>
        <div className="form-group">
          <label className="form-label">{this.props.title}</label>
          <br/>
          <Checkbox.Group
            className= {this.props.className}
            options={this.props.options}
            defaultValue={this.props.defaultValue}
            onChange={this.props.onChangeChekboxGroup}
          />
        </div>
      </div>
    );
  }
}
CheckBoxGroups.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked:PropTypes.bool.isRequired,
  defaultChecked:PropTypes.bool,
  onChangeCheckBox: PropTypes.func.isRequired,
  disabled:PropTypes.bool,
  className:PropTypes.string

};

export default CheckBoxGroups;