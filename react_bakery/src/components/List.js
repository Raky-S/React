import React, { Component } from "react";
class List extends Component {
  constructor() {
    super();
    // this.state = {
    //   item: {
    //     input: this.props.input,
    //     price: this.props.price,
    //   },
    // };
    // this.addItem = this.addItem.bind(this);
  }
  methodForm() {
    // console.log(this);
    // this.props.listItems.input;
    // let arr = this.props.items;
    // let arr2 = arr.map(this.props.items).length;
    // arr2 = arr.map(function () {

    // });
    // console.log(arr);
    // console.log(arr2);
  }
  render() {
    return (
      <div className="App">
          <p>La list</p>
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            {this.props.addItem.items.input}"ce que tu veux"
            <span className="badge badge-primary badge-pill">
              {" "}
              {this.props.addItem.items}"€"
            </span>
            //{" "}
          </li>
        </ul>
      </div>
    );
  }
}
export default List;
