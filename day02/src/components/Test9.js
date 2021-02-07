import React, { Component } from 'react';
import './Test9.css';

class Test9 extends Component {
    aa = {
        data : [
            {id:1, name:'이름1', age:20, address:'서울', isJoin:false},
            {id:2, name:'이름2', age:22, address:'제주', isJoin:true},
            {id:3, name:'이름3', age:23, address:'경기', isJoin:true},
            {id:4, name:'이름4', age:24, address:'전주', isJoin:false},
            {id:5, name:'이름5', age:25, address:'경남', isJoin:true},
            {id:6, name:'이름6', age:26, address:'강원', isJoin:false},
        ]
    }

    render() {
        return (
            <div className="test9">
                <table>
                    <colgroup>
                        <col className="id"/>
                        <col className="name"/>
                        <col className="age"/>
                        <col className="address"/>
                        <col className="isJoin"/>
                    </colgroup>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>age</th>
                            <th>address</th>
                            <th>isJoin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.aa.data.map((item) => {
                                return(
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.address}</td>
                                    <td>{item.isJoin?'참여':'미참여'}</td>
                                </tr>
                                )
                            })
                        }
                        
                    </tbody>
                </table>
                <hr/>
            </div>
        );
    }
}

export default Test9;