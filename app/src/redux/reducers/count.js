/* 
 * 2022/4/22 17:26
 * author: xxx
 * @description:
 */
import {SUBTRACT, INCREMENT} from "../typeConfig"

export default function count(state = 0, action) {
    let {type, data} = action;
    let newState = null;
    switch (type) {
        case INCREMENT:
            newState = state + data;
            return newState;
        case SUBTRACT:
            newState = state - data;
            return newState;
        default:
            return state;
    }
}
