import React, { Component }from 'react';
import Card from "./movie/Card";


class DiscoverBattle extends Component {
  constructor() {
    super();
    this.state = {
      movie: [],
      currentPage: 1,
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
          currentPage: json.results[0],
        });
        console.log("dans componentDidMount");
      });
  }
  render() {
    return (
      <div className="row">
        {this.state.currentPage ((movie) => (
          <Card page={movie} />
        ))}
      </div>
    );
  }
}

export default DiscoverBattle;
