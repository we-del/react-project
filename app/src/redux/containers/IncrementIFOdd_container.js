/* 
 * 2022/4/23 18:32
 * author: xxx
 * @description:
 */
import {connect} from "react-redux";
import IncrementIfOdd from "../component/simple_computer/IncrementIfOdd";
import {handlerIncrement, handlerSubtract} from "../action";

// 方式 1 只适用与 适用 action缓冲层时，才能这么写，在我们触发这些函数时，底层会进行调用
export default connect(({count}) => ({count}), {
        increment: handlerIncrement,
        subtract: handlerSubtract
    }
)
(IncrementIfOdd)

//
// export default connect(number => ({number}), dispatch => ({
//         increment() {
//             dispatch(handlerIncrement())
//         },
//         subtract() {
//             dispatch(handlerSubtract())
//         }
//     })
// )
// (IncrementIfOdd)