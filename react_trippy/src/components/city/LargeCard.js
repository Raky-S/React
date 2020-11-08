import React from "react";
import { Config } from '../../Config'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Container = styled.div`

`;

class LargeCard extends React.Component {
  render() {

    return (
      <div>

        <container className='col-md-6 col-12'>
          
            <Link to={`/hotels?city=${this.props.paris}`}>
              <div>
                <img
                  src={`${Config.host}${this.props.source}`}
                  alt="..."
                ></img>
                <p>{this.props.name}</p>
              </div>


            </Link>
        </container>
      </div>
    

    );
  }
}
export default LargeCard;
