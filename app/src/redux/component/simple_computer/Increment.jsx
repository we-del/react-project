/**
 @name : Increment
 @date : 2022/4/23
 @description:
 */


import React, {Component} from "react";

export default class Increment extends Component {
    handlerClick = () => {
        console.log(this);
        let {increment} = this.props;
        increment();
    }

    componentDidMount() {
        console.log("increment", this);
    }

    render() {
        return (<button onClick={this.handlerClick}>+</button>);
    }

}