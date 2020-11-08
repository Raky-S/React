import React from "react";
import { Config } from "../../Config";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div``;

class Card extends React.Component {
  render() {
    // console.log(' dans render de card', this.props);
    return (
      <div>
        <container className="col-md-3  col-6">
          <Link to={`/hotels?city=${this.props.slug}`}>
            <div>
              <img src={`${Config.host}${this.props.source}`} alt="..."></img>
              <p>{this.props.name}</p>
            </div>
          </Link>
        </container>
      </div>
      // <div className="card col-3" style={{ width: 250 }}>
      //   <img
      //     className="card-img-top"
      //     src={`${Config.host}${this.props.source}`}
      //     alt="..."
      //   ></img>
      //   <div className="card-body">
      //     <h5 className="card-title">{this.props.name}</h5>
      //     <p className="card-text"> {this.props.slug} </p>
      //   </div>
      //   <p></p>
    );
  }
}
export default Card;
