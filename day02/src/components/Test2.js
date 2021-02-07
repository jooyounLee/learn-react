import React, { Component } from 'react';

class Test2 extends Component {
    render() {
        const msg = '타이틀'

        return (
            <div>
                <Test2Sub
                    title={msg}
                    id='ididid'
                    name='이름2'
                    age={33}
                    address='서울'
                    isLogin={true}
                    color='yellow'
                />

            </div>
        );
    }
}

class Test2Sub extends Component {
    render(){
        const {title, id, name, age, address, isLogin, color} = this.props

        return (
            <div>
                <ul>
                    <li>title : {title}</li>
                    <li>id : {id}</li>
                    <li>name : {name}</li>
                    <li>age : {age}</li>
                    <li>address : {address}</li>
                    <li>{isLogin?`hello ${name}`:'sign in'}</li>
                </ul>
                <hr/>
                <Test2Sub2
                    title={title}
                    age={28}
                    name='김이름3'
                    address='경기'
                    isLogin={false}
                />
                <hr/>
            </div>
        );
    }
}

class Test2Sub2 extends Component {
    render(){
        const {title, id, name, age, address, isLogin, color} = this.props

        return(
            <div>
                <ul>
                    <li>title : {title}</li>
                    <li>id : {id}</li>
                    <li>name : {name}</li>
                    <li>age : {age}</li>
                    <li>address : {address}</li>
                    <li>{isLogin?`hello ${name}`:'sign in'}</li>
                </ul>
            </div>
        );
    }
}

export default Test2;