import React, { Component } from 'react';
import PropsTypes from 'prop-types';

class Test3Sub extends Component {
    render() {
        const {id, name, address, age} = this.props
        return (
            <div>
                <ul>
                    <li>id : {id}</li>
                    <li>name : {name}</li>
                    <li>address : {address}</li>
                    <li>age : {age}</li>
                </ul>
            </div>
        );
    }
}

export default Test3Sub;

Test3Sub.defaultProps = {
    name : '이름없음',
    age : 0,
    address : '지역 정보 없음',
}

Test3Sub.propTypes = {
    name : PropsTypes.string,
    age : PropsTypes.number.isRequired,
}