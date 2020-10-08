import React, { Component } from "react";
import Card from "./movie/Card";

class Popular extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=134d92c3d72c8501356da2496ace8c7e`
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          movies: json.results,
        });
        console.log("dans componentDidMount", json.results);
      });
  }
  render() {
    return (
      <div className="row">
        {this.state.movies.map((movie) => (
          <Card data={movie} />
        ))}
      </div>
    );
  }
}
export default Popular;
