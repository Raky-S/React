import React, { Component } from "react";
import "./App.css";
import "./css/bootstrap.min.css";
import Button from "./components/Button";

class App extends Component {
  constructor() {
    super();
    this.componentDidMount = this.componentDidMount.bind(this);
    this.state = {
      name: "",
      capital: "",
      flag: "",
      population: 0,
      region: "",
    };
  }

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/name/france")
      .then((response) => response.json())
      .then((value) =>
        this.setState({
          name: value[0].name,
          capital: value[0].capital,
          flag: value[0].flag,
          population: value[0].population,
          region: value[0].region,
        })
      )
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Country Selector</p>
        </header>
        <div className="App">
          <p>Name : {this.state.name}</p>
          <p>Capital : {this.state.capital}</p>
          <p>Flag : {this.state.flag}</p>
          <p>Population : {this.state.population}</p>
          <p>Region : {this.state.region}</p>
          <div  className="row justify-content-center">
            <Button >France</Button>
            <Button >Bresil</Button>
            <Button>Croatie</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
