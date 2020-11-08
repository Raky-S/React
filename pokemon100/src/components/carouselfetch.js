
import React, { Component } from 'react';
import Carousel from './carousel'



class Carouselfetch extends Component {
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
            });
    }
    pokeClick() {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=100`)
            .then(res => res.json())
            .then(json => {
                this.setState({
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
        const { pokeList } = this.state;

        return (
            <div className=''>
                {pokeList.map((elem, index) => {
                    return (
                        <Carousel
                            data={elem}
                        />
                    );
                })}

            </div>

        );
    }
}

export default Carouselfetch;









