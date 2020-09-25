import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pay from './components/Pay'
import List from './components/List'
import Add from './components/Add'
import Button from './components/core/Button'



class App extends Component {
  
  
  
  
  state = {
    activeTab : 'add',
    items : [],
};



  render() {
    return (
      <div className="App">
       <Pay/>
       <List/>
       <Add/>
       <Button children="Add" isSelected onClick>Add</Button>
       <Button children isSelected onClick>List</Button>
       <Button children isSelected onClick>Pay</Button>
      </div>
    );
  }
}

export default App;
