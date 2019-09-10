import React, { Component } from "react";
import PropTypes from "prop-types";
import { Select } from "antd";
const { Option } = Select;


class SingleDropDown extends Component {
 
  render() {
    return (
      <div>
        <div className="form-group">
          <label className="form-label">{this.props.title}</label>
          <Select
            defaultValue={this.props.defaultValue}
            style={this.props.DropDownstyle}
            dropdownClassName={this.props.dropdownClassName}
            onChange={this.props.handleDropDownChange}
            placeholder={this.props.placeholder}
          >
          
            {this.props.options.map((option, index) => {
            
              return (
                <Option
                  disabled={option.disabled}
                  loading={option.loading}
                  key={index}
                  value={option.value}
                >
                  {option.label}
                </Option>
              );
            })}
          </Select>
        </div>
      </div>
    );
  }
}
SingleDropDown.propTypes = {
  title: PropTypes.string.isRequired,
  handleDropDownChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  defaultValue:PropTypes.oneOf(['string','number']),
  options:PropTypes.array,
  DropDownstyle:PropTypes.object,
  dropdownClassName:PropTypes.string,
  disabled:PropTypes.bool,
  loading:PropTypes.bool
};

export default SingleDropDown;
