import React, { Component } from "react";
import Icon from "./core/Icon";

class HeartRate extends Component {
  render() {
    return (
      <div class="box, col-md-2, col-6">
        {/* <span
          class="material-icons"
          style={{
            fontSize: 100,
            color: "red",
          }}
        >
          favorite
        </span> */}

        <Icon name="favorite" color={"red"}>{this.state.heart}</Icon>

        <p>{this.props.heart}</p>
      </div>
    );
  }
}
export default HeartRate;
