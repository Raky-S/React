import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <div>
    
 <button className= "btn btn-primary" /*onMouseHover="btn btn-secondary"*/ isSelected onClick={this.props.onClick}>
    {this.props.children}
 </button> 
      </div>
    );
}
}
export default Button;



//   <button >
// {this.props.tabs.map(tab => {
    // const active = tab === this.props.activeTab ? "active" : "";
    // return (
        // <button
        // key={tab}
        // className={"btn btn-primary" + active}
        // onClick={() => this.props.setActiveTab(tab)}
        // >
    //   {tab}
    // </button>
//   );
// })}
