/* 
 * 2022/4/25 15:07
 * author: xxx
 * @description:
 */

import clone from "./clone";
import {ADDICTIONTODODATA, REMOVETODODATA, BUTTONSHOW,BUTTONHIDDEN} from "../typeConfig";

export default (state = [], action) => {
    let {type, data} = action;
    let newState = clone(state);
    switch (type) {
        case ADDICTIONTODODATA:
            newState.unshift(data);
            return newState;
        case  REMOVETODODATA:
            return newState.filter(({id}) => {
                console.log(id, data.id);
                return id !== data;
            });
        case BUTTONSHOW:
            newState.forEach((item) => {
                if (item.id === data) item.isShow= true;
            })
            return newState;
        case BUTTONHIDDEN:
            newState.forEach((item) => {
                if (item.id === data) item.isShow= false;
            })
            return newState;
        default:
            return state;
    }
}
