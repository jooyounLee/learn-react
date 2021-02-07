import React, { Component } from 'react';

class Test4 extends Component {
    //class area -> this
    onClick1 = () => {
        alert('click1')
    }
    onClick2 = () => {
        alert('click2')
    }
    onClick3 = () => {
        alert('click3')
    }
    onClick4 = (num) => {
        alert(num)
    }

    render() {
        return (
            <div>
                <h2>이벤트</h2>
                <p>
                    <button onClick={this.onClick1}>클릭1</button>
                    <button onClick={this.onClick2}>클릭2</button>
                    <button onClick={this.onClick3}>클릭3</button>
                </p>
                <p>
                    <button onClick={() => {
                        alert('onclick 안에 메소드')
                    }}>클릭1</button>
                    <button onClick={()=>{
                        alert('onclick2 안에 메소드')
                    }}>클릭2</button>
                    <button onClick={()=> alert('클릭클릭')}>클릭3</button>
                </p>
                <p>
                    <button onClick={() => {this.onClick4(55)}}>클릭1</button>
                    <button onClick={() => {this.onClick4(66)}}>클릭2</button>
                    <button onClick={() => this.onClick4(77)}>클릭3</button>
                </p>
                <hr/>
            </div>
        );
    }
}

export default Test4;