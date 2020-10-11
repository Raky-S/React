import React, { Component } from "react";
import Card from "./movie/Card";
import { API_KEY } from "../service/Network";
import { element } from "prop-types";
import placeholder from "../image/placeholder.png";

class PopularBattle extends Component {
  constructor() {
    super();
    this.choseFilm=this.choseFilm.bind(this)
    this.state = {
      movies: [],
      currentPage: 1,
      localStorage:"",
    };
  }

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        const movies = json.results.map((elem) => {
          return {
            title: elem.title,
            imgUrl: elem.poster_path
              ? ` https://image.tmdb.org/t/p/w300${elem.poster_path}`
              : placeholder,
            description: elem.overview,
            id: elem.id,
          };
        });
        this.setState({ movies });
      });
  }



choseFilm(id){
console.log("j'ai été cliqué");

let storage=localStorage.getItem('my-list') 
// && this.state({ currentPage: JSON.parse(localStorage.getItem('my-list'))})
// local = JSON.parse(storage)
console.log(storage); 


this.setState({
  currentPage: this.state.currentPage +1,
});
}


  render() {

    const { movies,
      currentPage,
    } = this.state

    const secondeIndex= currentPage * 2 -1
    const firstIndex= secondeIndex - 1

    const firstMovie = movies[firstIndex];
    const secondeMovie = movies[secondeIndex];
    console.log(firstMovie);
    console.log(secondeMovie);

    return (
      <div className="row">
        <div className="col-6">
          <Card onClick={() =>this.choseFilm(firstMovie.id)} {...firstMovie} />
        </div>
        <div className="col-6">
          <Card onClick={() =>this.choseFilm(secondeMovie.id)} {...secondeMovie} />
        </div>
      </div>
    );
  }
}
export default PopularBattle;

// constructor() {
//   super();
//   // this.currentP = this.currentP.bind(this)
//   this.state = {
//     movies: [],
//     currentPage: 1,
//   };
// }

// componentDidMount() {
//   fetch(
//     `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=134d92c3d72c8501356da2496ace8c7e`
//   )
//     .then((res) => res.json())
//     .then((json) => {
//       this.setState({
//         movies: json.results,
//       });
//       // console.log("ComponentDidMount ", json.results[1]);
//     });

// }

// render() {
//   let firstMovie = this.state.movies[0]
//   let secondeMovie = this.state.movies[1]
//   console.log(firstMovie);
//   console.log(secondeMovie);

//   // console.log(this.secondeMovie)
//   return (
//     <div>
//      <Card data={}/>

//       {/* {this.firstMovie ((movie)=> <Card data={movie}/>)}
//       {this.secondeMovie ((movie) => <Card data={movie} />)} */}
//     </div>

//     //  {
//     //     this.state.movies.forEach((item, index, array) => {
//     //       console.log(item, index, array);
//     //     })
//     //   }

//     // <div className="row">
//     //   <Card data={this.state.current[i]} />
//     // </div>
//   );
// }
