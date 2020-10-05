import React, { Component } from "react";
import specimen from "../../image/specimen.jpg";

class Card extends Component {

    constructor() {
        super();
        this.state = {
            source: specimen,
        }
    }

    componentDidMount() {
        fetch(`http://konexio.codiscovery.co/bakery/api/?q=${this.props.input}`)
            .then(res => res.json())
            .then(json => {
                if (json.success) {
                    this.setState({
                        source: json.source
                    })
                }
            });


    };






    render() {
        return <div>
            <button onClick={() => this.props.onClickFn(this.props.input, this.props.price)}>
                <img src={this.state.source} alt="" />
            </button>
        </div>;
    }
}
export default Card;
