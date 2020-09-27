import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Pay from "./components/Pay";
import List from "./components/List";
import Add from "./components/Add";
import Button from "./components/core/Button";



/* CODE TROUVE SUR STACKOVERFLOW de LYDY donc pas le mien*/


class App extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: "add",
      items: [],
    };
  }

  handleClick(activeTab) {
    this.setState({ activeTab });
  }

  render() {
    return (
      <div>
        <div className="App-header">
          <h1>Bakery</h1>
        </div>

        <div className="App btn-group bouton">
          <Button onClick={this.handleClick.bind(this, "add")}> Add </Button>
          <Button onClick={this.handleClick.bind(this, "list")}> List </Button>
          <Button onClick={this.handleClick.bind(this, "pay")}> Pay </Button>
        </div>

        {this.state.activeTab === "add" && <Add />}
        {this.state.activeTab === "list" && <List />}
        {this.state.activeTab === "pay" && <Pay />}
      </div>
    );
  }
}
export default App;
