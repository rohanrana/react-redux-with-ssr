import React, { Component } from "react";
import PropTypes from "prop-types";
import { isEmail } from "validator";

import { Input } from "antd";
class EmailInput extends Component {
  // componentWillReceiveProps(){
  //     alert("called 2")
  // }
  static defaultProps = {
    inputType: "email",
    isRequired: false
  };
  static propTypes = {
    inputType: PropTypes.oneOf(["email"]).isRequired,
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    controlFunc: PropTypes.func.isRequired,
    content: PropTypes.oneOfType([PropTypes.string]).isRequired,
    placeholder: PropTypes.string,
    isRequired: PropTypes.bool.isRequired,
    validateCallback: PropTypes.func.isRequired
  };
  state = {
    emailError: null
  };

//   componentWillReceiveProps(nextProps) {
  
//   }
  validator = async () => {
    console.log("this.props", this.props.isRequired);
    if (this.props.isRequired && this.props.content === "") {
      this.setState({ emailError: "Enter An Email" });
      this.props.validateCallback(false);
    } else if (!isEmail(this.props.content)) {
      this.setState({ emailError: "Enter A Valid Email" });
      this.props.validateCallback(false);
    } else {
      this.setState({ emailError: null });
      this.props.validateCallback(true);
    }
  };
  //retruns if validatiosn are fullfilled or not
  validateCallback = () => {
    if (this.state.emailError !== null) {
      return true;
    } else {
      return false;
    }
  };
  render() {
    return (
      <div>
        <div className="form-group">
          <label className="form-label">{this.props.title}</label>
          <Input
            className={this.props.className}
            size={this.props.size}
            disabled={this.props.disabled}
            name={this.props.name}
            type={this.props.inputType}
            value={this.props.content}
            onChange={this.props.controlFunc}
            onBlur={this.validator}
            onFocus={()=>{
                this.setState({emailError:null})
            }}
            // validateCallback={this.props.validateCallback}
            placeholder={this.props.placeholder}
          />
          <span>{this.state.emailError}</span>
        </div>
      </div>
    );
  }
}

export default EmailInput;
