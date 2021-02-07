import React, { Component } from 'react';
import Test3Sub from './Test3Sub';

class Test3 extends Component {
    render() {
        return (
            <div>
                <Test3Sub
                    id='ididid'
                    name='이름3'
                    address='서울'
                    age={11}
                />
                <Test3Sub
                    id='ididid2'
                    name='이름2'
                    address='경기'
                />
                <Test3Sub
                    id='ididid3'
                    name='이름32'
                    age={12}
                />
                <Test3Sub
                    id='ididid4'
                    name='이름4'
                    age={111}
                />
                <hr/>
            </div>
        );
    }
}

export default Test3;