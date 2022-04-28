/**
 @name : TodoList
 @date : 2022/4/25
 @description:
 */

import {Card, Input, Row, Col} from "antd";
import UserInput from "../../containers/todoList_input_container";
import TodoShow from "../../containers/todoShow_container";

export default () => {

    return (<div>
        <Card title={
            <UserInput/>
        }
              style={{width: 600,  margin: "100px auto"}}>
            <TodoShow/>
        </Card>
    </div>);
}