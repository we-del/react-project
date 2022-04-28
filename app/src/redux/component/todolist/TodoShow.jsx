/**
 @name : TodoShow
 @date : 2022/4/25
 @description:
 */

import React, {Component} from "react";
import {List, Button} from "antd";

export default class TodoShow extends Component {
    componentDidMount() {
        console.log(this);
    }

    handlerClick = (id) => {
        console.log("我是button", id);
        this.props.removeThis(id);
    }

    render() {
        let {todoListData,buttonShow,buttonHidden} = this.props;
        let {Item} = List;
        console.log(todoListData);
        return (
            <>
                <List
                    bordered
                    dataSource={todoListData}
                    renderItem={({data, id, isShow}) =>
                        <Item
                            onMouseOut={()=>{buttonHidden(id)}} onMouseOver={()=>{buttonShow(id)}}
                        >
                            {data}
                            <Button type={"danger"} ghost={true} size={"small"}
                                    style={isShow ? {display: "block", float: "right",transition:"1s all"} : {
                                        display: "none",
                                        float: "right",
                                        transition:"1s all"
                                    }}
                                    onClick={() => {
                                        this.handlerClick(id)
                                    }}>
                                    删除
                            </Button>
                        </Item>
                    }
                />
            </>
        );
    }
}