import store from "../../store";

/**
 @name : IncrementIfOdd
 @date : 2022/4/23
 @description:
 */
import React, {Component} from "react";
export default class IncrementIfOdd extends Component {
    handlerClick = () => {
        console.log(this);
        let {increment,number} = this.props;
        if (Math.abs(number % 2) === 1) {
            increment();
        }
    }

    render() {
        return (<button onClick={this.handlerClick}>increment if odd</button>);
    }


}