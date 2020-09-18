import React, { Component } from "react";
import Icon from './core/Icon';



class HeartRate extends Component {
  render() {
    return (
      <div class="box, col-md-2, col-6">
        <span
          class="material-icons"
          style={{
            fontSize: 100,
            color: "red",
          }}
        >
          favorite
        </span>
        {this.props.heart}

      </div>
    );
  }
}
export default HeartRate;
