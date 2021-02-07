import React, { Component } from 'react';

class Test8 extends Component {
    render() {
        const data = [
            {id:1, name:'이름1', age:10, address:'서울', isAdmin:false},
            {id:2, name:'이름2', age:26, address:'뉴욕', isAdmin:false},
            {id:3, name:'이름3', age:22, address:'도쿄', isAdmin:true},
            {id:4, name:'이름4', age:12, address:'부산', isAdmin:false},
            {id:5, name:'이름5', age:15, address:'시드니', isAdmin:true},
        ]

        return (
            <div>
                <h2>map test</h2>

                {
                    data.map((data)=>{
                        return(
                            <div key={data.id}> 
                                <span>id:{data.id},</span> <span>name:{data.name},</span><span>age:{data.age}</span> 
                                {data.isAdmin?'관리자':'회원'}
                            </div>
                        )
                    })
                }
                <hr/>
            </div>
        );
    }
}

export default Test8;