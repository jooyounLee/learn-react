import React, { Component } from "react";

class Test3 extends Component{
  render(){
    const style1 = {
      backgroundColor:'yellow',
      fontSize:30,
      color:'blue',
      width:500,
      height:100
    }

    const style2 = {
      backgroundColor:'black',
      fontSize:50,
      color:'white',
      width:200,
      height:200
    }

    return (
      <div>
        <p style={style1}>jsx 스타일</p>
        <p style={style2}>jsx 스타일222</p>
        <p style={{backgroundColor:'red',width:200,height:50,color:'lightgray',fontSize:20}}>jsx 스타일333</p>
      </div>
    )

  }
}

export default Test3;