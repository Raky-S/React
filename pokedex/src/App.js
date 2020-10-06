import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button'


class App extends Component {

  constructor() {
    super()
    this.state = {
      name: "",
      height: 0,
      weight: 0,
      type: "",
    }
  }


  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
      .then((res) => res.json())
      .then((value) => {
        this.setState({
          name: value.name,
          height: value.height,
          weight: value.weight,
          type: value.types[0].type.name,
        })
        // console.log(value);
      })
   
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Pokedex
          </h1>
        </header>
        
          <Button componentDidMount={this.componentDidMount}/>
      </div>
    );
  }
}

export default App;
