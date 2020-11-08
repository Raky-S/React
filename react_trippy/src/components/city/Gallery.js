import React from "react";
import { Global } from '../../Global'
import styled from 'styled-components'
import Card from './Card'
import LargeCard from './LargeCard'

const Container = styled.div`
margin-top : 10;
margin-bottom : 20;
color : Global.color.body;
font-family : Global.font.primary
`;

class Gallery extends React.Component {



    render() {

        const { cities } = this.props
        console.log('cities dans gallery', cities);

        return (
            <div>
                <Container className={`row ${Global}`}>
                    <div className='col-md-12'>
                        <h1>Explorez le monde</h1>
                        <div>
                            {cities.map((elem, index) => {
                                return (
                                    <LargeCard 
                                    key={index[0]}
                                    name={elem.name} 
                                    slug={elem.slug} 
                                    source={elem.source}></LargeCard>
                                )
                            })}
                        

                        
                            {cities.map((elem, i) => {
                                return (
                                    <Card 
                                    key={i}
                                    name={elem.name} 
                                    slug={elem.slug} 
                                    source={elem.source}></Card>
                                )
                            })}
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}
export default Gallery;
