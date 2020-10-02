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
    this.listForm = this.listForm.bind(this);
  }

  listForm() {
    const listItems = this.props.listItem.map(({input, price}) => {
      return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
          {input}
          <span className="badge badge-primary badge-pill">{price}€</span>
        </li>
      );
    });

    return (
      <ul className="list-group">
        {listItems}
      </ul>
    );
  }
  
  render() {
    return (
      <div className="App">
        {this.listForm()}
      </div>
    );
  }
}
export default List;
