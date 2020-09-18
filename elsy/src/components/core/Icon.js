import React, { Component } from "react";


class Icon extends Component {
    render () {
        return (
            <span class="material-icons">{this.props.name}</span>
        )
    }
}
export default Icon;