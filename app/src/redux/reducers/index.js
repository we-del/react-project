/* 
 * 2022/4/24 15:59
 * author: xxx
 * @description:
 */


import {combineReducers} from "redux"; // 用于总和多个reducer
import count from "./count";
import personData from "./personData";
import todoListData from "./todolistData";
export default combineReducers({
    count, personData,todoListData
});