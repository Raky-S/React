import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.count}</h2>
        <button
          style={{
            backgroundColor: "blue",
            fontSize: 30,
            height: 50,
            width: 150,
          }}
          onClick={this.props.incrementFn}
        >
        +
        </button>
        <button
          style={{
            backgroundColor: "red",
            fontSize: 30,
            height: 50,
            width: 150,
          }}
          onClick={this.props.decrementFn}
        >
        -
        </button>
      </div>
    );
  }
}
export default Counter;
