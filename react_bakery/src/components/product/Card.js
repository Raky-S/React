import React, { Component } from "react";
import specimen from "../../image/specimen.jpg";

class Card extends Component {

    constructor() {
        super();
        this.state = {
            source: specimen,
        }
        console.log(this.state);
    }

    componentDidMount() {
        fetch(`http://konexio.codiscovery.co/bakery/api/?q=${this.props.itemName}`)
            .then(response => response.json())
            .then(res => {
                if (res.success) {
                    this.setState({
                        source: res.source
                    })
                }
            });


    };






    render() {
        return <div>
            <button>
                <img src={this.state.source} alt="" />
            </button>
        </div>;
    }
}
export default Card;
