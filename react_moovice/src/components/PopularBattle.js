import React, { Component } from 'react';
import Card from "./movie/Card";


class PopularBattle extends Component {
  constructor() {
    super();
    // this.currentP = this.currentP.bind(this)
    this.state = {
      movies: [],
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
          movies: json.results[1],
        });
        // console.log("ComponentDidMount ", json.results[1]);
      });

  }

  render() {
    let current = this.state.movies
    let i = 0;
    console.log(current);
    console.log(this.current)
    return (
      <div> 

        <Card data={this.state.movies} />
      </div>
      // <div className="row">
      //   <Card data={this.state.current[i]} />
      // </div>
    );
  }
}
export default PopularBattle;
