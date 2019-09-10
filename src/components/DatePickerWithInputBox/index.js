import React, { Component } from "react";
import PropTypes from "prop-types";
import { DatePicker, Input, Icon } from "antd";
import moment from "moment";
import DatePickerWithInput from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
class SingleDatePicker extends Component {
  state = {
    // selectedDate: moment().format("YYYY-MM-DD"),
    selectedDate:'',
    open: this.props.open
  };
  onClose=()=>{
    this.setState({open:false})
  }
  render() {
    return (
      <div>
        <div className="form-group">
          <label className="form-label">{this.props.title}</label>
      

         { <DatePickerWithInput
            // open={this.state.open}
            // disabled={this.props.disabled}
            
            // value={moment(this.state.selectedDate)}
            disabledDate={this.props.disabledDateFunc}
            selected={this.props.defaultValue}
            onChange={this.props.handleDateChange}
            
          />}
              {/* <Input
            onChange={e => {
              this.setState({ selectedDate: e.target.value });
            }}
            onClick={() => {}}
            // onBlur={() => {
            //   this.setState({ open: false });
            // }}
            prefix={
              <Icon
                onClick={() => this.setState({ open: !this.state.open })}
                type="calendar"
                style={{ color: "rgba(0,0,0,.25)" }}
              />
            }
            onBlurCapture={() => {
              this.setState({ open: false });
            }}
            suffix={() => <span>Click</span>}
          /> */}
        </div>
      </div>
    );
  }
}

SingleDatePicker.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  defaultChecked: PropTypes.bool,
  onChangeDate: PropTypes.func.isRequired,
  disabledDateFunc: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string
};

export default SingleDatePicker;
