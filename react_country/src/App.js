import React, { Component } from "react";
import "./App.css";
import "./css/bootstrap.min.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      capital: "",
      flag: "",
      population: 0,
      region: "",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Country Selector</p>
        </header>
        <div> </div>
      </div>
    );
  }
}

export default App;
