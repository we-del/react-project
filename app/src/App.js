import React from 'react';
import {Button} from 'antd';
import {useRoutes} from "react-router-dom";
import 'antd/dist/antd.less';
import router from "./router/router";
import Computer from "./redux/component/simple_computer/Computer";
import Computer_container from "./redux/containers/Computer_container";
import TodoList from "./redux/component/todolist/TodoList";
const App = () => {
    let element = useRoutes(router);
    return (
        <div className="App">
            {/*{element}*/}
            {/*<Computer/>*/}
            {/*<Computer_container/>*/}
            <TodoList/>
        </div>
    );
}

export default App;