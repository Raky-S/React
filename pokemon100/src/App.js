import React, { Component } from 'react';
import './App.css';
import Carousel from './components/carousel'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <Carousel></Carousel>
        </header>
      </div>
    );
  }
}

export default App;
