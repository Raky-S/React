import React, { Component } from "react";
import Icon from "./core/Icon";

class Person extends Component {
  render() {
    return (
      <div class="box, col-md-2, col-6">
        <Icon name= 'directions_walk'  color= {'black'}></Icon>
      </div>
    );
  }
}
export default Person;
