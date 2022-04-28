/* 
 * 2022/4/23 18:32
 * author: xxx
 * @description:
 */
import {connect} from "react-redux";
import Subtract from "../component/simple_computer/Subtract";
import {handlerIncrement, handlerSubtract} from "../action";

// 为什么要向外暴露该挂载的变量？不是应该只暴露ui组件就行吗？
export default  connect(({count}) => ({count}), dispatch => ({
        increment() {
            dispatch(handlerIncrement())
        },
        subtract() {
            dispatch(handlerSubtract())
        }
    })
)
(Subtract)