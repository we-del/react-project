/**
 @name : Computer
 @date : 2022/4/23
 @description:
 */

import React, {Component} from "react";
import Increment_container from "../../containers/Increment_container";
import IncrementIFOdd_container from "../../containers/IncrementIFOdd_container";
import Subtract_container from "../../containers/Subtract_container";
import AsyncAdd_container from "../../containers/asyncAdd_container";
import AsyncSubtract_container from "../../containers/AsyncSubtract_container";

// import Increment from "./Increment";
// import IncrementIfOdd from "./IncrementIfOdd";
// import Subtract from "./Subtract";
export default class Computer extends Component {


    componentDidMount() {
        console.log("computer", this);
    }

    render() {
        let {count} = this.props;
        return (
            <div>当前的数是:{count}
                {/*<Increment/>*/}
                {/*<IncrementIfOdd/>*/}
                {/*<Subtract/>*/}
                <Increment_container/>
                <IncrementIFOdd_container/>
                <Subtract_container/>
                <AsyncAdd_container/>
                <AsyncSubtract_container/>
            </div>);
    }
}