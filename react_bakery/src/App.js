import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Pay from "./components/Pay";
import List from "./components/List";
import Add from "./components/Add";
import Button from "./components/core/Button";



class App extends Component {

  constructor() {
    super();
    this.sayHello = this.sayHello.bind(this);
  }



  state = {
    activeTab: Add,
    items: [],
  };



 sayHello() {
    
      
      let hey ='hey hey'
      alert(hey)
      return hey;
    
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Bakery</h1>
        </div>
        <Add />
        <List />
        <Pay />

<button onClick ={this.sayHello}>click ici </button>
        {/* <Button children="Add" isSelected onClick ={this.sayHello} > */}
          {/* {this.state.activeTab} */}
        {/* </Button> */}
        {/* <Button children="List" isSelected onClick>
          
        </Button>
        <Button children="Pay" isSelected onClick>
           
        </Button> */}
      </div>
    );
  }
}

export default App;
