import React, { Component } from 'react';

class Test1 extends Component {
    render() {
        const title = '신상명세서'
        const name='김이름'
        const age=30
        const isLogin = true
        const color = 'pink'
        const style1 = {border:'1px solid red', width:300, height:200}

        return (
            <div>
                <div>jsx 문법정리 복습</div>
                <div style={style1}>{title}</div>
                <ul>
                    <li>이름 : {name}</li>
                    <li>나이 : {age}</li>
                    <li>{isLogin ? <button style={{backgroundColor:color}}>로그아웃</button>:<button style={{backgroundColor:color}}>로그인</button>}</li>
                </ul>
            </div>
        );
    }
}

export default Test1;