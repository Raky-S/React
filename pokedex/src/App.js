import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Pokeindex from './components/Pokeindex'
import '../src/css/bootstrap.min.css'

class App extends Component {
  constructor() {
    super();
    this.pokeClick = this.pokeClick.bind(this);
    // this.subPokemon = this.subPokemon.bind(this);
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
    this.pokeClick('1')
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
          id: json.id,
         
        })
        // console.log('heyyy',json.id);
        console.log('coucou',json.types[0].type.name)       
      });
  }
  pokeClick() {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=100`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          pokeList: json.results
        })
                console.log('jason nest pas la', json.results);
      });
  }
  // subPokemon() {
  //   console.log('subPokemon', this.state)
  //   return this.state.pokeList.map((id) => {
  //     return <img onClick={this.subPokemon} src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} />
  //   })
  // }
  render() {
    console.log('pokelist dans app', this.state.pokeList);
    return (
      <div className="App">
        {this.state.pokeList.map((elem) => {
          return (
            <div>
              <p> la liste de pokemon </p>

              <div className="card" style={{ width: 180 }}>
                <img className="card-img-top" src={`https://pokeres.bastionbot.org/images/pokemon/${this.state.id}.png`} />
                <div className="card-body">
                  <p className="card-text" >
                    <Pokeindex
                      Name={elem.name}
                      Height={this.state.height} m
                      Weight={this.state.weight} Kg
                      Type={this.state.type}>
                      </Pokeindex>
                  </p>
                </div>
              </div>
              {/* <Button onClick={this.pokeClick} >
                  <img className='poke' src={`https://pokeres.bastionbot.org/images/pokemon/${this.state.id}.png`} ></img>
                </Button> */}
            </div>
          )
        })}
      </div>
    );
  }
}
export default App;




