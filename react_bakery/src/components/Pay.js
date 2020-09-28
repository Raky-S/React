import React, { Component } from "react";
// import Button from './core/Button'

class Pay extends Component {
  render() {
    return (
      <div>
       <h1>Pay Me Now!</h1>
       {this.props.children}
     </div>
    );
  }
}

export default Pay;

// if (this.props.isSelected) {
//   return (
//     <div>
//       <h1>Pay Me now!</h1>
//       {this.props.children}
//     </div>
//   );
// }