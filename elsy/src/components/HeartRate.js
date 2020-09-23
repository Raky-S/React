import React, { Component } from "react";
import Icon from "./core/Icon";
import Slider from "./core/Slider";

class HeartRate extends Component {
  render() {
    return (
      <div className="box col-md-2 col-6">
        <Icon name="favorite" color={"red"}></Icon>
        <Slider min max onChange />
        <p>{this.props.heart}BPM</p>
      </div>
    );
  }
}
export default HeartRate;
