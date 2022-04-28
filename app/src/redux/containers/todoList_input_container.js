/* 
 * 2022/4/25 15:26
 * author: xxx
 * @description:
 */

/*
 * 2022/4/25 15:16
 * author: xxx
 * @description:
 */

import {connect} from "react-redux";
import UserInput from "../component/todolist/UserInput";
import {additionDataToTodoList} from "../action";

export default connect(()=>({}),
    {addThis: additionDataToTodoList}
)(UserInput);