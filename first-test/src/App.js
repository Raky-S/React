import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title></Title>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </header>
      </div>
    );
  }
}
export default App;
