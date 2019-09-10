import React from "react";
import { Tag, Input, Icon, message } from "antd";
import { TweenOneGroup } from "rc-tween-one";
import { isNumeric } from "validator";
export default class ChipsWithInput extends React.Component {
  state = {
    tags: this.props.tags,
    inputVisible: false,
    inputValue: ""
  };

  handleClose = removedTag => {
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    console.log(tags);
    this.setState({ tags });
    this.props.getTags(tags);
  };

  showInput = () => {
    if (this.state.tags.length <= this.props.numberOfChipsAllowed - 1) {
      this.setState({ inputVisible: true }, () => this.input.focus());
    } else {
      message.error("Only 5 Values Are Allowed");
    }
  };

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleInputConfirm = () => {
    const { inputValue } = this.state;

    if (isNumeric(inputValue)) {
      message.error("Invalid Input");
    } else {
      let { tags } = this.state;
      if (inputValue && tags.indexOf(inputValue) === -1) {
        tags = [...tags, inputValue];
      }
      console.log(tags);
      this.setState({
        tags,
        inputVisible: false,
        inputValue: ""
      });

      this.props.getTags(tags);
    }
  };

  saveInputRef = input => (this.input = input);

  forMap = tag => {
    const tagElem = (
      <Tag
        closable
        onClose={e => {
          e.preventDefault();
          this.handleClose(tag);
        }}
      >
        {tag}
      </Tag>
    );
    return (
      <span key={tag} style={{ display: "inline-block" }}>
        {tagElem}
      </span>
    );
  };

  render() {
    const { tags, inputVisible, inputValue } = this.state;
    const tagChild = tags.map(this.forMap);
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <label>{this.props.title}</label>
          <TweenOneGroup
            enter={{
              scale: 0.8,
              opacity: 0,
              type: "from",
              duration: 100,
              onComplete: e => {
                e.target.style = "";
              }
            }}
            leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
            appear={false}
          >
            {tagChild}
          </TweenOneGroup>
        </div>
        {inputVisible && (
          <Input
            ref={this.saveInputRef}
            type="text"
            size="large"
            className="input_field"
            style={{ width: "100% " }}
            value={inputValue}
            onChange={this.handleInputChange}
            onBlur={this.handleInputConfirm}
            onPressEnter={this.handleInputConfirm}
          />
        )}
        {!inputVisible && (
          <Tag
            onClick={this.showInput}
            style={{ background: "#fff", borderStyle: "dashed" }}
          >
            <Icon type="plus" />{" "}
            {this.props.textLabl !== undefined
              ? this.props.textLabl
              : "New Keyword"}
          </Tag>
        )}
      </div>
    );
  }
}
