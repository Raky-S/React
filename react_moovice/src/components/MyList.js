import React, { Component } from 'react';

class MyList extends Component {
  constructor() {
    super()
    this.getFromLocalStorage = this.getFromLocalStorage.bind(this)
    this.state = {
      localStorage: [],
    }
  }


  getFromLocalStorage(mylist) {
   
    console.log('dans getfromLS',this.props);

    let newMylist = this.props.choseFilm;
    console.log();
    newMylist.push(mylist);
    console.log(mylist);

    this.setState({
      localStorage: newMylist,
    });

    console.log(this.state.localStorage);
  }
  

  render(){
    return(
      <div>
        <p>dis quelque chose!!</p>
      </div>
    )
  }
}
export default MyList;
