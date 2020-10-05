import React from 'react';
import Card from "../components/product/Card";



class Add extends React.Component {

constructor(){
    super()
    this.state = {
        basket : [],
        total : [0],
        totalVat : [0],
        totalEcoTax: [0],
    }
}


onClickProduct(name, price) {

}



    render() {
        return (<div>pay
            <div>{this.state.total}</div>
            <Card itemName='cookie' {this.props.items} ></Card>
        </div>)
    }
}

export default Add