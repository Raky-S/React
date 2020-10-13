import React, { Component } from "react";
import Card from "./movie/Card";
import { API_KEY } from "../service/Network";
import placeholder from "../image/placeholder.png";



class MyList extends Component {
  constructor() {
    super();
    this.state = {
      // localStorage: [],
      movies: [],
      movieIds: this.getFromLocalStorage()
    };
    // console.log("hey hey hey", moviesIds);
  }

  getFromLocalStorage() {
    //  let movieIdsList= JSON.parse(localStorage.getItem('my-list')) 
    return JSON.parse(localStorage.getItem('my-list')) || []

  }
  componentDidMount() {

    const theList = (id) =>
      fetch(`http://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
        .then(res => res.json())
        .then(data => data);

    console.log(theList);
    // console.log(res.json);

    const promises = this.state.movieIds.map(id => theList(id));

    // console.log(promises);

    Promise.all(promises)
      .then((theList) => {
        const movies = theList.map((elem) => {
          return {
            title: elem.title,
            imgUrl: elem.poster_path
              ? ` https://image.tmdb.org/t/p/w300${elem.poster_path}`
              : placeholder,
            description: elem.overview,
            // id: elem.id
          };
        });
        console.log('la liste dans promise all', theList);
        this.setState({ movies })
        console.log(this.state.movies);
      });
  }

  render() {
    const { movies } = this.state;
    // console.log(this.state.movies);
    // console.log(this.state.movieIds);
    return (
      <div className="row">
        {movies.map((elem, id) => {
          return (
            <Card
              key={id}
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
