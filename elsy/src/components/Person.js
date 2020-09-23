import React, { Component } from "react";
import Icon from "./core/Icon";
import Slider from "./core/Slider";

class Person extends Component {
  render() {
    return (
      <div className="box col-md-2 col-6">
        <Icon name="directions_walk" color={"black"}></Icon>
        <p>{this.props.steps}</p>
        <Slider />
      </div>
    );
  }
}
export default Person;
