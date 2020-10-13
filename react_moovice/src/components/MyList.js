import React, { Component } from "react";
import Card from "./movie/Card";
import { API_KEY } from "../service/Network";



class MyList extends Component {
  constructor() {
    super();
    this.getFromLocalStorage=this.getFromLocalStorage.bind(this)
    this.state = {
      // localStorage: [],
      movies: [],
      movieIds: this.getFromLocalStorage()
    };
    // console.log("hey hey hey", moviesIds);
  }

  getFromLocalStorage() {

   let movieIdsList= JSON.parse(localStorage.getItem('my-list'))

    const theList = (ID) =>
      fetch(`http://api.themoviedb.org/3/movie/${ID}?api_key=${API_KEY}`)
        .then(res => res.json())
        .then(data => data);

    console.log(theList);
    // console.log(res.json);

    const promises = movieIdsList.map(ID => theList(ID));

    console.log(promises);

    Promise.all(promises)
      .then((theList) => {
        console.log('theList id 1', theList);
        this.setState = ({
          movieIds: theList,
        })
        console.log(this.state.movies);
      })
  }

  render() {
    const { movieIdsList } = this.state;
    // console.log(this.state.movies);
    // console.log(this.state.movieIdsList);
    return (
      <div className="row">
        {movieIdsList.map((elem, index) => {
          return (
            <Card
              key={index}
              title={elem.title}
              description={elem.description}
              imgUrl={elem.imgUrl}
            />
          );
        })}
      </div>
    );
  }
}
export default MyList;


// getFromLocalStorage(id) {
//   console.log("dans getfromLS", this.props);
//   let newMyList = this.props.choseFilm;
//   console.log(newMyList);

//   newMyList.push(id);

//   this.setState({
//     localStorage: newMyList,
//   });

//   console.log("hello linda", localStorage);
// }
