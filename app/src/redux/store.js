/* 
 * 2022/4/22 17:26
 * author: xxx
 * @description:
 */
import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk"; // 引入异步编程中间件
import {composeWithDevTools} from "redux-devtools-extension";
import reducers from "./reducers";
export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));

