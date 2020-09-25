import React, { Component } from "react";
import HeartRate from "./components/HeartRate";
import Person from "./components/Person";
import "./css/styles.css";
import Temperature from "./components/Temperature";


const MIN_TEMPERATURE = -20;
const MAX_TEMPERATURE = 40;
const MIN_HEART = 80;
const MAX_HEART = 180;
const MIN_STEPS = 0;
const MAX_STEPS = 50000;

class App extends Component {
  constructor() {
    super();
    this.onHeartChange = this.onHeartChange.bind(this);
    this.onStepChange = this.onStepChange.bind(this);
    this.onTemperatureChange = this.onTemperatureChange.bind(this);
  }

  state = {
    water: 0,
    heart: 120,
    temperature: -10,
    steps: 3000,
  };

  onHeartChange (val) {
    this.setState({
      heart : val
    })
  };

  onStepChange (val) {
    this.setState({
      steps : val
    })
  };
  onTemperatureChange (val) {
    this.setState({
      temperature : val
    })
  };

  render() {
    return (
      <div className="App">
        <Person min = {MIN_STEPS} max = {MAX_STEPS} onChange = {this.onStepChange} steps = {this.state.steps}/>
        <HeartRate min = {MIN_HEART} max = {MAX_HEART} onChange = {this.onHeartChange} heart = {this.state.heart}/>
        <Temperature min = {MIN_TEMPERATURE} max = {MAX_TEMPERATURE} onChange = {this.onTemperatureChange} temperature = {this.state.temperature}/>
      </div>
    );
  }
}

export default App;
