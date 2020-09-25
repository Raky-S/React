import React, { Component } from "react";
import Icon from "./core/Icon";
import Slider from "./core/Slider";

class Temperature extends Component {
  render() {
    return (
      <div className="box col-md-2 col-6">
        <Icon name="wb_sunny" color={"yellow"}></Icon>
        <Slider
          min={this.props.min}
          max={this.props.max}
          onChange={this.props.onChange}
          value={this.props.temperature}
          />
          <p>{this.props.temperature}°C</p>
      </div>
    );
  }
}
export default Temperature;
