/**
 @name : TodoList
 @date : 2022/4/21
 @description:
 */

import React, {useState} from "react";
import {Card, Input, Form} from "antd";

export default () => {
    let [todo, setTodo] = useState({count:1});
    const handlerClick = ()=>{
        console.log(this);
        todo = JSON.parse(JSON.stringify(todo));
        todo.count++;
        setTodo(todo);
        console.log(this);
        console.log(1);
    }
    return (
        <div>
            <Card title="todolist" style={{width: 800, height: 400, backgroundColor: "#ffccc7", margin: "auto"}}>
                <div onClick={handlerClick}>
                    今天天气很 {todo.count}
                </div>
            </Card>
        </div>
    );
}