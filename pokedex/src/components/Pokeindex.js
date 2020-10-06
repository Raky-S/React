import classes from '*.module.css';
import React, { Component } from 'react';



class Pokeindex extends Component {

    render() {
        return (
            <div>
                <p>{this.state.name}</p>
                <p>{this.state.height}</p>
                <p>{this.state.weight}</p>
                <p>{this.state.type}</p>

            </div>
        )
    }

} export default Pokeindex
