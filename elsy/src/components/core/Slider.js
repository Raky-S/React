import React, { Component } from 'react';
import RCSlider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';




class Slider extends Component {
       
       render (){
        return(
        <div><RCSlider>
        {this.props.max}
        {this.props.min}
        {this.props.onChange}
        {this.props.value}
        </RCSlider>
        </div>
        )
    }
}
export default Slider;