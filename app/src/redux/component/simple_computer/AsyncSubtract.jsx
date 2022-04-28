/**
 @name : AsyncSubtract
 @date : 2022/4/24
 @description:
 */

import React, {Component} from "react";

export default class AsyncSubtract extends Component {
    aysncSUbtract = ()=>{
        this.props.asynSubtract();
    }
    render() {
        return(<button onClick={this.aysncSUbtract}>async subtract</button>);
    }
}