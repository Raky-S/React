import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Add from "./components/Add";
import List from "./components/List";
import Pay from "./components/Pay";
import Button from "./components/core/Button";

class App extends Component {
  constructor() {
    super();
    this.onClickTabAdd = this.onClickTabAdd.bind(this);
    this.onClickTabList = this.onClickTabList.bind(this);
    this.onClickTabPay = this.onClickTabPay.bind(this);
    this.addItem = this.addItem.bind(this);
    this.state = {
      activeTab: "add",
      items: [],
    };
  }

  onClickTabAdd() {
    console.log("tab add click");
    this.setState({
      activeTab: "add",
    });
  }

  onClickTabList() {
    console.log("tab  list click");
    this.setState({
      activeTab: "list",
    });
  }

  onClickTabPay() {
    this.setState({
      activeTab: "pay",
    });
  }

  addItem(input, price) {
    let newItems = this.state.items;
    newItems.push({ input, price });

    this.setState({
      items: newItems,
    });

    console.log(this.state.items);
  }

  // listItems(input, price) {
  //   this.setState({});
  //   console.log(input, price);
  // }

  renderContent() {
    switch (this.state.activeTab) {
      case "add":
        return <Add addItem={this.addItem}></Add>;
      case "list":
        return <List addItem={this.addItem}></List>;
      case "pay":
        return <Pay></Pay>;
      default:
        return <h1>Error</h1>;
    }
  }

  render() {
    return (
      <div className="justify-content-center">
        <div className="App-header">La Bakery</div>
        <div className="row justify-content-center mt-8 ">
          <Button
            isSelected={this.state.activeTab === "add"}
            onClick={this.onClickTabAdd}
          >
            Add
          </Button>
          <Button
            isSelected={this.state.activeTab === "list"}
            onClick={this.onClickTabList}
          >
            List
          </Button>
          <Button
            isSelected={this.state.activeTab === "pay"}
            onClick={this.onClickTabPay}
          >
            Pay
          </Button>

          {this.renderContent()}
          {/* {this.state.activeTab === 'add' ? <Add></Add>: (this.state.activeTab === 'list' ? <List></List> : <Pay></Pay>)} */}
        </div>
      </div>
    );
  }
}

export default App;
