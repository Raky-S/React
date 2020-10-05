import React from 'react';
import Card from "../components/product/Card";



class Add extends React.Component {

    constructor() {
        super()
        this.onClickProduct = this.onClickProduct.bind(this)
        this.renderCard = this.renderCard.bind(this)
        this.state = {
            basket: [],
            total: 0,
            totalVat: 0,
            totalEcoTax: 0,
        }
    }


    onClickProduct(name, price) {
        // console.log('Il y a des cookies dans le jar à coukies', name, price);
        this.setState = {
            
        }
    }


    renderCard() {
        console.log(this.props);
        return this.props.listItem.map((elem, index) => {
            return <Card
                key={index}
                input={elem.input}
                price={elem.price}
                onClickFn={this.onClickProduct}
            ></Card>
        })
    }


    render() {
        return (<div>
            <p>pay</p>
            <div>{this.state.total}</div>
            {this.renderCard()}
        </div>)
    }
}

export default Add