import React, {Component} from "react";

class Card extends Component {
 
  render() {
    return (
      <div className="card col-3" style={{ width: 250 }}>
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w300${this.props.data.poster_path}`}
          alt="..."
        ></img>
        <div className="card-body">
          <h5 className="card-title"> {this.props.data.title}</h5>
          <p className="card-text"> {this.props.data.overview}</p>
        </div>
      </div>
    );
  }
}
export default Card;
