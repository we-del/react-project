/* 
 * 2022/4/24 12:31
 * author: xxx
 * @description:
 */
import {connect} from "react-redux";
import AsyncSubtract from "../component/simple_computer/AsyncSubtract";
import {SUBTRACT} from "../typeConfig";

export default connect(({count}) => ({count}), dispatch => ({
    asynSubtract() {
        //dispatch((dispatch) => (
            setTimeout(() => {
                dispatch({type: SUBTRACT, data: 1})
            }, 1000)
        // ));
    }
}))(AsyncSubtract);