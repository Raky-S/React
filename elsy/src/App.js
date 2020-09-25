import React, { Component } from "react";
import HeartRate from "./components/HeartRate";
import Person from "./components/Person";
import "./css/styles.css";
import Temperature from "./components/Temperature";
import Water from "./components/Water"

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
    let newWater = this.calculateWater(this.state);
    this.setState({
      heart : val,
      water : newWater
    })
  };

  onStepChange (val) {
    let newWater = this.calculateWater(this.state);
    this.setState({
      steps : val,
      water : newWater,
    })
  };
  onTemperatureChange (val) {
    let newWater = this.calculateWater(this.state);
    this.setState({
      temperature : val,
      water : newWater ,
    })
  };

  calculateWater (obj){
  
    let liters = 1.5;

    if (obj.temperature > 20) {
      let celsius = obj.temperature - 20 
      liters += celsius * 0.02
    } if (obj.steps > 10000) {
      let stepByStep = obj.steps - 10000 
      liters += stepByStep * 0.0008 
    }if (obj.heart > 120) {
      let rate = obj.heart - 120 
      liters += rate * 0.00002
  }
  return Math.round(liters *100)/100;
  };

  render() {
    return (
      <div className="App">
        <Water water= {this.state.water}
        />
        <Person min = {MIN_STEPS} max = {MAX_STEPS} onChange = {this.onStepChange} steps = {this.state.steps}/>
        <HeartRate min = {MIN_HEART} max = {MAX_HEART} onChange = {this.onHeartChange} heart = {this.state.heart}/>
        <Temperature min = {MIN_TEMPERATURE} max = {MAX_TEMPERATURE} onChange = {this.onTemperatureChange} temperature = {this.state.temperature}/>
      </div>
    );
  }
}

export default App;
