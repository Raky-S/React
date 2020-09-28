import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Pay from "./components/Pay";
import List from "./components/List";
import Add from "./components/Add";
import Button from "./components/core/Button";



class App extends Component {
 
   
 
 
    constructor(props) {
      super(props);
      this.state = {
      activeTab: "add",
      items: [],
      }
    };
  
    setActiveTab = (tab) => {
      this.setActiveTab({activeTab : tab})
    }
       
  
    render() {
      return (
        <div className="App mt-4">
          <div className="App-header">
            <h1>Bakery</h1>
          </div>      
          <container className= "mt-4 btn-group bouton" >
          <Button tabs={'add', 'list','pay'} children="Add" activeTab={ this.state.activeTab } setActiveTab={this.setActiveTab} isSelected={this.state.activeTab === "add"}></Button>
          <Button  tabs={'add', 'list','pay'}children="List" activeTab={ this.state.activeTab } setActiveTab={this.setActiveTab} isSelected={this.state.activeTab === "list"}></Button>
          <Button  tabs={'add', 'list','pay'} children="Pay" activeTab={ this.state.activeTab } setActiveTab={this.setActiveTab} isSelected={this.state.activeTab === "pay"}></Button>
         
          {/* <Button children="List" isSelected onClick></Button>
          <Button children="Pay" isSelected onClick></Button> */}
          </container>
        </div>
      );
    }
  }
  
  export default App;
  