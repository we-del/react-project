/* 
 * 2022/4/23 15:42
 * author: xxx
 * @description:
 */

import {INCREMENT, SUBTRACT, ADDICTIONTODODATA, REMOVETODODATA,BUTTONSHOW,BUTTONHIDDEN} from "./typeConfig";

export const handlerIncrement = () => ({type: INCREMENT, data: 1});
export const handlerSubtract = () => ({type: SUBTRACT, data: 1});
export const asyncIncrement = () => ((dispatch) => {
    setTimeout(() => (dispatch({type: INCREMENT, data: 1})), 1000)
});

export const additionDataToTodoList = (data) => {
    console.log(data);
    return{type: ADDICTIONTODODATA, data};
};
export const removeDataFromTodoList = (data) => ({type: REMOVETODODATA, data});
export const todoListBtnShow = (data)=>({type:BUTTONSHOW,data});
export const todoListBtnHidden = (data)=>({type:BUTTONHIDDEN,data});