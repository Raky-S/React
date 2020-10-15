import React, { Component }from 'react';
import Card from "./movie/Card";
import { API_KEY } from "../service/Network";
import placeholder from "../image/placeholder.png";
import moment from 'moment';

class DiscoverBattle extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetch(
      `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte={TODAY}&primary_release_date.lte=${NEXT_WEEK}&api_key=${API_KEY}`
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
export default DiscoverBattle;
