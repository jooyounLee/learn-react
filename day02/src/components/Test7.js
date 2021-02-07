import React, { Component } from 'react';

class Test7 extends Component {
    render() {
        const title = 'title'
        const arr = ['A', 'B', 'C', 'D', 'E']

        return (
            <div>
                <h2>{title}</h2>
                <p>{arr[0]}</p>
                <p>{arr[1]}</p>
                <p>{arr[2]}</p>
                <p>{arr[3]}</p>
                <p>{arr[4]}</p>
                <hr/>

                {
                    arr.map((item, idx) => {
                        return(
                            <p key={idx}>{idx} / {item}</p> 
                        )
                    })
                }
                <hr/>

                {
                    arr.map((item, idx) => {
                        return(
                            <p key={idx}>{item}</p>
                        )
                    })
                }
                <hr/>
            </div>
        );
    }
}

export default Test7;