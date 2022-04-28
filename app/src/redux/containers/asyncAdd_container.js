/* 
 * 2022/4/23 18:32
 * author: xxx
 * @description:
 */
import {connect} from "react-redux";
import AsyncAdd from "../component/simple_computer/AsyncAdd";
import {asyncIncrement} from "../action";
// 为什么要向外暴露该挂载的变量？不是应该只暴露ui组件就行吗？
export default connect(({count}) => ({count}), {asyncIncrement})(AsyncAdd);