import React, {Component} from "React";

class Person extends Component {
  render() {
    return (
      <div
        style={{
          fontSize: 100,
          color: "black",
        }}
        class="box, col-md-2, col-6"
        >
        {/* {this.props.div} */}
        <span class="material-icons">directions_walk</span>
      </div>
    );
  }
}
export default Person;
