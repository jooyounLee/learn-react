import React, { Component } from "react";

class Test2 extends Component{
  render(){
    const title = '신상명세서'
    const name = '이름1'
    const age = 33
    const address = '서울'

    return(
      <div>
        <p>jsx영역</p>
        <p>{title}</p>
        <p>{name}</p>
        <p>{age}</p>

        {/* 주석주석 */}

        <p
        // 주석
        >
          ㅇㅇ
        </p>
      </div>
  );
  }
}

export default Test2;