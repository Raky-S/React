
import React, { Component } from "react";
import "./App.css";
import Counter from "./components/Counter";

/* ----------------------------étape 2-------------------------*/ 

class App extends Component {
  constructor() {
    super();
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }

  state = {
    count: 1,
  };

  incrementCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  decrementCount() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Counter</h1>
        <Counter
          incrementFn={this.incrementCount}
          decrementFn={this.decrementCount}
          count={this.state.count}
        ></Counter>
      </div>
    );
  }
}
export default App;




/*-----------------------étape 1 ------------------------*/


// import React, { Component } from "react";
// import './App.css';

// class App extends Component {

//   constructor(props) {
//     super()
//     this.incrementCount=this.incrementCount.bind(this)
//     this.decrementCount=this.decrementCount.bind(this)
//   }

//   state = {
//     count: 1,
//   };

//   incrementCount () {
//     this.setState ({
//       count : this.state.count + 1
//     })
//   }

//   decrementCount () {
//     this.setState ({
//       count : this.state.count - 1
//     })
//   }

//   render() {
//     return (
//       <div>
//         <h1>Counter</h1>
//         <h2>{this.state.count}</h2>
//          <button
//          style={{backgroundColor: "green"}}
//           onClick= {this.incrementCount} > + </button>
//          <button
//           style={{backgroundColor: "red"}}
//           onClick={this.decrementCount} > - </button>
//       </div>
//     );
//   }
// }
// export default App;
