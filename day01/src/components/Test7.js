import React, { Component } from "react";

class Test7 extends Component{
  // class area
  handleClick1 = () => {
    alert('handleClick1');
  }

  handleClick2 = () => {
    alert('handleClick2');
  }

  handleClick3 = () => {
    alert('handleClick3');
  }

  render(){
    
    return(
      <div>
        <div>
          <button onClick={this.handleClick1}>Button1</button>
          <button onClick={this.handleClick2}>Button2</button>
          <button onClick={this.handleClick3}>Button3</button>
        </div>
      </div>
    )
  }
}

export default Test7;