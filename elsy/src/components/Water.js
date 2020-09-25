import React, { Component } from "react";
import Icon from "./core/Icon";
import Slider from "./core/Slider";

class Water extends Component {
  render() {
    return (
      <div className="box col-md-2 col-6">
        <Icon name="local_drink" color={"#3A85FF"}></Icon>
        <p>{this.props.water}L</p>
      </div>
    );
  }
}
export default Water;