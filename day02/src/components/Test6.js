import React, { Component } from 'react';
import './Test6.css';

class Test6 extends Component {
    state = {
        isOn : false
    }
    addClass = () => {
        this.setState({
            isOn : true
        });
    }
    toggle = () => {
        const {isOn} = this.state
        this.setState({
            isOn : !isOn
        });
    }
 
    render() {
        const {isOn} = this.state
        return (
            <div className='test6'>
                <div className={`test ${isOn ? 'on' : ''}`}>
                    1111
                </div>
                <div className={`${isOn ? 'on1' : ''}`}>
                    2222
                </div>

                <button onClick={this.addClass}>class toggle</button>
                <button onClick={this.toggle}>remove toggle</button>
                <hr/>
            </div>
        );
    }
}

export default Test6;