export default App;
import React, { Component } from 'react';
import './App.css';
import './css/bootstrap.min.css'
import Button from './component/Button';
import './css/pokecss.css'
import Card from './component/Card';
class App extends Component {
  constructor() {
    super();
    this.pokeClick = this.pokeClick.bind(this);
    this.subPokemon = this.subPokemon.bind(this);
    this.state = {
      name: '',
      height: 0,
      weight: 0,
      type: '',
      id: '',
      pokeList: ['']
    }
  };

  componentDidMount() {
    this.pokemon('1')
  }


  pokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          name: json.name,
          height: json.height,
          weight: json.weight,
          type: json.types[0].type.name,
          id: json.id
        })
        // console.log('heyyy',json.id);
        // console.log('coucou',json.types[0].type.name)       
      });
  }
  pokeClick() {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=100`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          // id: json.results[0].url['id'],
          pokeList: json.results
        })
        console.log(json.results);
      });
  }
  subPokemon() {
    console.log('subPokemon', this.state)
    return this.state.pokeList.map((id) => {
      return <img onClick={this.subPokemon} src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} />
    })
  }
  render() {
    return (
      <div className="App">
        <div>
          <h1>pokedex</h1>
          <img className='poke' src={`https://pokeres.bastionbot.org/images/pokemon/${this.state.id}.png`}></img>
          <Card
            Name={this.state.name}
            Height={this.state.height} m
            Weight={this.state.weight} Kg
            Type={this.state.type}>
            {this.state}</Card>
        </div>
        <div>
          <p>{this.subPokemon()} la liste de pokemon </p>
          <Button onClick={this.pokeClick} >
            <img className='poke' src={`https://pokeres.bastionbot.org/images/pokemon/${this.state.id}.png`} ></img>
            {this.state.id}
          </Button>
        </div>
      </div>
    );
  }
}
export default App;


/*
import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Pokeindex from "./components/Pokeindex";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      height: 0,
      weight: 0,
      type: "",
      id: 0,
      list: [],
    };
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon/rattata")
      .then((res) => res.json())
      .then((value) => {
        this.setState({
          name: value.name,
          height: value.height,
          weight: value.weight,
          type: value.types[0].type.name,
          id: value.id,

        });
        // console.log(value);
      });
  }

  catchIdOnClick() {
    fetch(` https://pokeapi.co/api/v2/pokemon?limit=100`)
      .then((res) => res.json())
      .then((value) =>
        this.setState({
          id: value.results[0].url.id,
          // list: value.results,
          // console.log(value)
        })
      );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Pokedex</h1>
        </header>
        <Pokeindex onClick={this.componentDidMount}
          name={this.state.name}
          height={this.state.height}
          weight={this.state.weight}
          type={this.state.type} />
        <Button componentDidMount={this.componentDidMount}>
          <img
            className="poke"
            className="img-thumb"
            src={`https://pokeres.bastionbot.org/images/pokemon/${this.state.id}.png`}
          ></img>
        </Button>
        <Button componentDidMount={this.componentDidMount}>
          <img
            className="poke"
            className="img-thumb"
            src={`https://pokeres.bastionbot.org/images/pokemon/${this.state.id}.png`}
          ></img>
        </Button>
      </div>
    );
  }
}
*/



