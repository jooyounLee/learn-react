import React, { Component } from 'react';

class Test5 extends Component {
    state = {
        name : '이름이',
        age : 0,
        address : '지역 없음'
    }

    onClick = () => {
        this.setState({
            name : '새이름',
            age : 33
        });
    }

    onClick2 = () => {
        this.setState({
            name : '새이름22',
            age : 44,
            address : '서울시 강남구'
        });
    }

    render() {
        return (
            <div>
                name : {this.state.name}<br/>
                age : {this.state.age}<br/>
                addtess : {this.state.address}<br/>

                <p>
                    <button onClick={this.onClick}>change</button>
                    <button onClick={this.onClick2}>change2</button>
                </p>
                <p>
                    <button onClick={() => {
                        this.setState({
                            name : '으아아',
                            age : 12345
                        })
                    }}>change3</button>
                    <button onClick={() => {
                        this.setState({
                            name : '힝ㅇㅇㅇ구',
                            address : '경기도 분당'
                        })
                    }}>change4</button>
                </p>
                <hr/>
            </div>
        );
    }
}

export default Test5;