import React from "react";

class Card extends React.Component {
  constructor() {
    super();
    this.indexFilm = this.indexFilm.bind(this);
    this.state = {
      title: "",
      poster_path: "",
      overview: "",
    };
  }
  componentDidMount() {
    this.indexFilm("");
  }
  indexFilm() {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=134d92c3d72c8501356da2496ace8c7e`
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          title: json.results[0].title,
          poster_path: json.results[0].poster_path,
          overview: json.results[0].overview,
        });
        // console.log("bonjour", json.results[0].title);
        // console.log("coucou", json.results[0].poster_path);
        // console.log("hello", json.results[0].overview);
      });
  }
  render() {
    return (
      <div className="card col-3" style={{ width: 250 }}>
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w300/${this.state.poster_path}`}
          alt="..."
        ></img>
        <div className="card-body">
          <h5 className="card-title"> {this.state.title}</h5>
          <p className="card-text"> {this.state.overview}</p>
        </div>
      </div>
    );
  }
}
export default Card;
