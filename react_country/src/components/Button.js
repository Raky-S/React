import React, { Component } from "react";



class Button extends Component {

    render () {
        return (
            <div>
                <button className="btn btn-warning btn-lg ">{this.props.children}</button>
            </div>
        )
    }
}export default Button;