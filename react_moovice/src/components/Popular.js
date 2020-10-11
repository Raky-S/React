import React, { Component } from "react";
import Card from "./movie/Card";
import { API_KEY } from "../service/Network";
import { element } from "prop-types";
import placeholder from "../image/placeholder.png";

class Popular extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
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
          };
        });
        this.setState({ movies });
      });
  }
  render() {
    const { movies } = this.state;

    return (
      <div className="row">
        {movies.map((elem, index) => {
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
export default Popular;

// {this.state.movies.map((movie) => (
//   <Card data={movie} />
// ))}
