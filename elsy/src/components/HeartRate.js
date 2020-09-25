import React, { Component } from "react";
import Icon from "./core/Icon";
import Slider from "./core/Slider";

class HeartRate extends Component {
  render() {
    return (
      <div className="box col-md-2 col-6">
        <Icon name="favorite" color={"red"}></Icon>
        <Slider
          min={this.props.min}
          max={this.props.max}
          onChange={this.props.onChange}
          value={this.props.heart}
          />
          <p>{this.props.heart} BPM</p>
      </div>
    );
  }
}
export default HeartRate;
