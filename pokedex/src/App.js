import React, { Component } from 'react';
import './App.css';
import Button from './components/Button'
import Pokeindex from './components/Pokeindex';


class App extends Component {

  constructor() {
    super()
    this.state = {
      name: "",
      height: 0,
      weight: 0,
      type: "",
      id: 0,
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
          id: value.id,
        })
        // console.log(value);
      })
   
  }


  idOnClick() {
    fetch(`https://pokeres.bastionbot.org/images/pokemon/${this.setState.id}.png`)
      .then(res => res.json())
      .then(json => )
  
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
        <Pokeindex />
        <Button componentDidMount={this.componentDidMount}></Button>
      </div>
    );
  }
}

export default App;
