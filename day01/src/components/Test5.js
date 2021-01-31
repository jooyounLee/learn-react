import React, { Component } from "react";

class Test5 extends Component{
  render(){
    const done1 = true
    const done2 = false
    const done3 = undefined
    return (
      <div>
        <p>a === true ? A : B</p>
        
        <div>
          {done1 ? <button>login1</button> : <button>logout1</button>}
        </div>
        <div>
          {done1 && <button>login2</button>}
        </div>
        <div>
          {done1 || <button>logout2</button>}
        </div>
      </div>
    )

  }
}

export default Test5;