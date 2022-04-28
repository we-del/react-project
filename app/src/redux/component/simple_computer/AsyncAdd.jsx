/**
 @name : AsyncAdd
 @date : 2022/4/24
 @description:
 */

import React, {Component} from "react";
export default class AsyncAdd extends Component {
    asyncAdd = ()=>{
        console.log(this);
        this.props.asyncIncrement();
    }
    render() {
        return (
            <button onClick={this.asyncAdd}>异步 +</button>
        );
    }
}