/**
 @name : UserInput
 @date : 2022/4/25
 @description:
 */

import React, {Component} from "react";
import {Input} from "antd";
import { v4 as uuidv4  } from 'uuid';
export default class UserInput extends Component {
    componentDidMount() {
        console.log(this);
    }

    getUserInput = (e)=>{
        let {value} = e.target;
        if(value.trim() === ""){
            return;
        }
        let obj = {id:uuidv4(),data:value,isShow:false};
        this.props.addThis(obj);
        e.target.value = "";
    }

    render() {
        return (
                <Input onPressEnter={this.getUserInput}/>
        );
    }
}