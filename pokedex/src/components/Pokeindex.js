import React, { Component } from 'react';



class Pokeindex extends Component {

    render() {
        console.log('proproproprosss',this.props);
        return (
            <div>
                <p>Name: {this.props.name}</p>
                <p>Height: {this.props.height} m</p>
                <p>Weight: {this.props.weight} kg</p>
                <p>Type: {this.props.type}</p>
            </div>
        )
    }

} export default Pokeindex
