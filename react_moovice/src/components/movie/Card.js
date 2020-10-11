import React, {Component} from "react";

class Card extends Component {
 
  render() {
    // console.log("dans card", this.props);
const {
  title,
  imgUrl,
  description,
}= this.props
    return (
      <div className="card" style={{ width: 250 }} onClick={this.props.onClick}>
        <img
          className="card-img-top"
          src={imgUrl}
          alt="..."
        ></img>
        <div className="card-body">
          <h5 className="card-title"> {title}</h5>
          <p className="card-text"> {description}</p>
        </div>
      </div>
    );
  }
}
export default Card;


{/* <div className="card col-3" style={{ width: 250 }}>
<img
  className="card-img-top"
  src={`https://image.tmdb.org/t/p/w300${this.props.data.poster_path}`}
  alt="..."
></img>
<div className="card-body">
  <h5 className="card-title"> {this.props.data.title}</h5>
  <p className="card-text"> {this.props.data.overview}</p>
</div>
</div> */}