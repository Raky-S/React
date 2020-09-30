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
    console.log("tab pay click");
    this.setState({
      activeTab: "pay",
    });
  }

  renderContent() {
    switch (this.state.activeTab) {
      case "add":
        return <Add></Add>;
      case "list":
        return <List></List>;
      case "pay":
        return <Pay></Pay>;
      default:
        return <h1>Error</h1>;
    }
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="App-header">La Bakery</div>
        <div>
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
