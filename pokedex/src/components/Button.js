import React, { Component } from 'react';
import Pokeindex from './Pokeindex';

class Button extends Component {

  constructor() {
    super()
    this.state = {
      imag: "",
    }
  }


  render() {
    return (
       <button onClick={this.props.componentDidMount}>
  {/* <img src="https://pokeres.bastionbot.org/images/pokemon/25.png" name="pikachu" className="img-thumb" alt=""/> */}
  {this.props.children} 
  
</button>
    )
  }
}

export default Button;
