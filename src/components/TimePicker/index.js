import React, { Component } from "react";
import PropTypes from "prop-types";
import { TimePicker } from "antd";
class TimePickerComponent extends Component {
  state = {
    // selectedDate: moment().format("YYYY-MM-DD"),
    selectedDate: "",
    open: this.props.open
  };
  onClose = () => {
    this.setState({ open: false });
  };
  render() {
    return (
      <div>
        <div className="form-group">
          <label className="form-label">{this.props.title}</label>

          {
            <TimePicker
              disabled={this.props.disabled}
              //   value={this.props.selectedTime}
              use12Hours={this.props.use12Hours}
              format={this.props.format}
              defaultValue={this.props.defaultValue}
              onChange={this.props.onTimeChange}
            />
          }
        </div>
      </div>
    );
  }
}

TimePickerComponent.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.string.isRequired,
  format: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  use12Hours: PropTypes.bool
};

export default TimePickerComponent;
