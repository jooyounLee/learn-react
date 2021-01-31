import React, { Component } from "react";

class Test6 extends Component{
  render(){
    
    return(
      <div>
        <Sub
          srl={1}
          id='ididid'
          name='kim'
          age={33}
          color='lightblue'
          isAdmin={true}
        />
      </div>
    )
  }
}

class Sub extends Component{
  render(){
    const {id, name, age, color, isAdmin} = this.props
    return(
      <div style={{backgroundColor:color}}>
        <h2>child component</h2>
        <ul>
          <li>id : {id}</li>
          <li>name : {name}</li>
          <li>age : {age}</li>
          <li>color : {color}</li>
          <li>admin : {isAdmin ? <button>admin page</button> : <button>home</button>}</li>
        </ul>
      </div>
    )
  }
}

/*
class Sub extends Component{
  render(){
    
    return(
      <div>
        <h2>child component</h2>
        <ul>
          <li>id : {this.props.id}</li>
          <li>name : {this.props.name}</li>
          <li>age : {this.props.age}</li>
          <li>color : {this.props.color}</li>
          <li>admin : {this.props.isAdmin ? <button>admin page</button> : <button>home</button>}</li>
        </ul>
      </div>
    )
  }
}
*/
export default Test6;