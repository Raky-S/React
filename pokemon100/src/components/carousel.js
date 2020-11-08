import React, { Component } from 'react';



class Carousel extends Component {
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
                        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className='poke' src={`https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`}></img>
                                    <div className="carousel-caption d-none d-md-block">

                                        <h5>Name = {data.name}</h5>
                                        <p>Height : {data.height} m</p>
                                        <p>Weight : {data.weight} kg</p>
                                        <p>Type : {data.type}</p>
                                    </div>
                                </div>
                            </div>

                            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev" onClick={this.pokeClick}>
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous Pokémon</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next" onClick={this.pokeClick}>
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next Pokémon</span>
                            </a>
                        </div>
                    );
                })}

            </div>

        );
    }
}

export default Carousel;









