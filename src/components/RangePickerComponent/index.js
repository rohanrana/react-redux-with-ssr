import React, { Component } from "react";
import PropTypes from "prop-types";
import { DatePicker } from "antd";
const {RangePicker } = DatePicker
class RangePickerComponent extends Component {
  render() {
    return (
      <div>
        <div className="form-group">
          <label className="form-label">{this.props.title}</label>
          <br />
          <RangePicker
            disabled={this.props.disabled}
            disabledDate={this.props.disabledDateFunc}
            defaultValue={this.props.defaultValue}
            onChange={this.props.onDateChange}
          />
        </div>
      </div>
    );
  }
}
// export const defaultProps = {
//   title: ""
// };
RangePickerComponent.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  defaultChecked: PropTypes.bool,
  onChangeDate: PropTypes.func.isRequired,
  disabledDateFunc: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string
};

export default RangePickerComponent;
