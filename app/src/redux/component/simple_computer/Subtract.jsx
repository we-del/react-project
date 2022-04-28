import store from "../../store";

/**
 @name : Subtract
 @date : 2022/4/23
 @description:
 */
import React, {Component} from "react";

export default class Subtract extends Component {

    handlerClick = () => {
        console.log(this);
        let {subtract} = this.props;
        subtract();
    }

    render() {

        return (<button onClick={this.handlerClick}>-</button>);
    }

}