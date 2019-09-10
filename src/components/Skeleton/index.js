import React, { Component } from "react";
import PropTypes from "prop-types";
import { Skeleton } from "antd";
class SkeletonComponent extends Component {
  render() {
    return (
      <div>
        {this.props.isAvtar ? (
          <Skeleton
            className={this.props.className}
            avatar={{
              shape: this.props.AvtarShape,
              size: this.props.AvtarSize
            }}
            paragraph={{ rows: this.props.rows }}
            active={this.props.isAnimation}
          />
        ) : (
          <Skeleton
            className={this.props.className}
            paragraph={{ rows: this.props.rows }}
            active={this.props.isAnimation}
          />
        )}
      </div>
    );
  }
}
SkeletonComponent.defaultProps = {
  AvtarShape: "circle",
  AvtarSize: "default",
  isAvtar: false,
  rows: 2,
  isAnimation:false

};
SkeletonComponent.propTypes = {
  rows: PropTypes.number.isRequired,
  isAvtar: PropTypes.bool,
  AvtarShape: PropTypes.string,
  AvtarSize: PropTypes.string,
  isAnimation: PropTypes.bool,
  className: PropTypes.string
};

export default SkeletonComponent;
