import React from "react";
import styled from 'styled-components';

const Nav = styled.div`
margin-top : 10;
margin-bottom : 20;
color : Global.color.body;
font-family : Global.font.primary
`;



class Navigation extends React.Component {
    constructor() {
        
        this.state = {
            isScrolled: false,
            isReady: false
        };
    }

    componentDidMount() {
        window.onscroll = this.onScroll.bind(this);
      }


      

    render() {

        return (
            <div>
                <h1> Navigation </h1>
            </div>
        );
    }
}

export default Navigation;