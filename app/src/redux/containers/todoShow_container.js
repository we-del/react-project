/* 
 * 2022/4/25 15:16
 * author: xxx
 * @description:
 */

import {connect} from "react-redux";
import TodoShow from "../component/todolist/TodoShow";
import {removeDataFromTodoList, todoListBtnShow,todoListBtnHidden} from "../action";

export default connect(
    ({todoListData}) => ({todoListData}),
    {
        removeThis: removeDataFromTodoList,
        buttonShow: todoListBtnShow,
        buttonHidden:todoListBtnHidden
    }
)(TodoShow);