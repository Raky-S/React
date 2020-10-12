import React, { Component } from 'react';

class MyList extends Component {
  constructor() {
    super()
    this.getFromLocalStorage = this.getFromLocalStorage.bind(this)
    this.state = {
      localStorage: [],
      movies: [],
      // movieIds: this.getFromLocalStorage()
    }
    console.log('hey hey hey', localStorage);
  }


  getFromLocalStorage(myList) {

    console.log('dans getfromLS', this.props);
    let newMyList = this.props.choseFilm;

    console.log();
    newMyList.push(myList);
    console.log(newMyList);

    this.setState({
      localStorage: newMyList,
    });

    console.log('hello linda', localStorage);
  }


  render() {
    return (
      <div>
        <p>dis quelque chose!!
        {this.state.localStorage}</p>
      </div>
    )
  }
}
export default MyList;
