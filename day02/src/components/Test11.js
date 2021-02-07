import React, { Component } from 'react';
import './Test11.css';

class Test11 extends Component {
    state = {
        data : [
            {id:1, name:'이름1', age:10, address:'서울', isAdmin:false},
            {id:2, name:'이름2', age:26, address:'뉴욕', isAdmin:false},
            {id:3, name:'이름3', age:22, address:'도쿄', isAdmin:true},
            {id:4, name:'이름4', age:12, address:'부산', isAdmin:false},
            {id:5, name:'이름5', age:15, address:'시드니', isAdmin:true},
            {id:6, name:'이름6', age:31, address:'서울', isAdmin:false},
            {id:7, name:'이름7', age:32, address:'뉴욕', isAdmin:false},
            {id:8, name:'이름8', age:44, address:'도쿄', isAdmin:true},
            {id:9, name:'이름9', age:45, address:'부산', isAdmin:false},
            {id:10, name:'이름10', age:30, address:'시드니', isAdmin:true},
        ]

    }

    delete1 = () => {
        console.log(1111);
        this.setState({
            data : this.state.data.filter(item => item.id !== 1)
        })
    }

    delete2 = () => {
        console.log(222);
        this.setState({
            data : this.state.data.filter(item => item.id != 2)
        })
    }

    delete3 = () => {
        console.log(333);
        const {data}=this.state
        const newData = data.filter(item => item.id !== 3)
        this.setState({
            data : newData
        })
    }
    
    delete4 = (id) => {
        this.setState({
            data : this.state.data.filter(item => item.id !== id)
        })
    }

    modify = (id) => {
        console.log(4444);
        const {data}=this.state
        this.setState({
            data : data.map(item => {
                if(item.id === id) {
                    return{
                        ...item ,
                        name:'이름수정1',
                        age:100,
                    }
                }else{
                    return item
                }
            })
        })
    }

    modify2 = (id) => {
        const {data} = this.state
        this.setState({
            data : data.map(item=> item.id === id ? {...item,name:'이름수정2', address:'지역수정2'}:item)
        })
    }

    render() {
        const {data} = this.state
        return (
            <div>
                <hr/><br/><br/>
                <p>
                    <button onClick={this.delete1}>삭제1</button>
                    <button onClick={this.delete2}>삭제2</button>
                    <button onClick={this.delete3}>삭제3</button>
                </p>
                <p>
                    <button onClick={() => {this.delete4(4)}}>삭제3</button>
                    <button onClick={() => {this.modify2(5)}}>삭제4</button>
                    <button onClick={() => {this.modify2(6)}}>삭제5</button>
                </p>
                <p>
                    <button onClick={()=>this.modify(7)}>수정7</button>
                    <button onClick={()=>this.modify(8)}>수정8</button>
                    <button onClick={()=>this.modify2(9)}>수정9</button>
                </p>
                <br></br>
                {
                    data.map(item => {
                        return(
                            <div key={item.id}>
                                {item.id} / {item.name} / {item.address}
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Test11;