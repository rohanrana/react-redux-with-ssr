import React, { Component } from "react";
import PropTypes from "prop-types";
import { Select } from "antd";
const { Option } = Select;

class DependentDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showChild: false,
      childArray: props.childArray
    };
  }
  handleDropDownChange = value => {
    this.props.handleDropDownChange();
  };
  render() {
    console.log("Array", this.props.mainPlacholder);
    return (
      <div>
        <div className="form-group">
          {/* <label className="form-label">{this.props.title}</label> */}
          <Select
            // defaultValue={this.props.defaultSelectedMain}
            style={this.props.DropDownstyle}
            value={this.props.selectedMain}
            dropdownClassName={this.props.dropdownClassName}
            onChange={this.props.handleMainDropDownChange}
            placeholder={this.props.mainPlacholder}
          >
           <Option value={null}>{this.props.mainPlacholder}</Option>
            {this.props.mainArray.map((option, index) => {
              return (
                <Option
                  //   disabled={option.disabled}
                  //   loading={option.loading}
                  key={index}
                  value={option.id}
                >
                  {option.label}
                </Option>
              );
            })}
          </Select>
          <br />
          <br/>
          {this.props.showChild && (
            <Select
              //   defaultValue={this.props.selectedChild}
              style={this.props.DropDownstyle}
              value={this.props.selectedChild}
              dropdownClassName={this.props.dropdownClassName}
              onChange={this.props.handleChildDropDownChange}
              placeholder={this.props.childPlaceholder}
            >
               <Option value={null} >{this.props.childPlaceholder}</Option>
              {this.props.childArray.map((option, index) => {
                return (
                  <Option
                    // disabled={option.disabled}
                    // loading={option.loading}
                    key={index}
                    value={option.id}
                  >
                    {option.label}
                  </Option>
                );
              })}
            </Select>
          )}
        </div>
      </div>
    );
  }
}
DependentDropDown.propTypes = {
  title: PropTypes.string.isRequired,
  handleDropDownChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.oneOf(["string", "number"]),
  options: PropTypes.array,
  DropDownstyle: PropTypes.object,
  dropdownClassName: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool
};

export default DependentDropDown;
