/**
 @name : Login
 @date : 2022/4/20
 @description:
 */

import "./css/login.less";
import logo from "./img/logo.png";
import {Form, Input, Button} from "antd";

export default () => {
    const loginHandlerOnFinishSuccess = () => {
        alert("提交成功");
    }
    const loginHandlerOnFinishFailed = () => {
        alert("提交失败");
    }
    const verifyConfig = (_, value) => {
        let reg = /^[a-zA-Z\d_]+$/;
        // 想正确的条件很简单，想错误的条件很难想全，因此我们只用列出满足条件的判断，然后取反就是不满足条件
        if(value === undefined) return Promise.reject(new Error("表单不能为空"));
        if(!(value.length >=6 && value.length <=15)) {
            return Promise.reject(new Error("长度需大于5位小于16位"));
        }
        if(! reg.exec(value)) return Promise.reject(new Error("只能输入字母数字或下划线"));
        return Promise.resolve("");
    }
    let {Item} = Form;
    return (
        <div className={"login-shell"}>
            <div className="login-mask">
                <header className="login-title">
                    <img src={logo} alt="logo" className={"logo"}/>
                    后台管理系统
                </header>
                <div className="antd-form-login">
                    <div className="login-input-box">用户登录</div>

                    <Form
                        name="basic"
                        labelCol={{
                            span: 7,

                        }}
                        wrapperCol={{
                            span: 11,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={loginHandlerOnFinishSuccess}
                        onFinishFailed={loginHandlerOnFinishFailed}
                        autoComplete="off"
                    >
                        <Item
                            label="账号"
                            name="account"
                            rules={[
                                {
                                    validator:verifyConfig
                                },
                            ]}>
                            <Input/>
                        </Item>
                        <Item
                            label="密码"
                            name="password"
                            rules={[
                                {
                                    validator:verifyConfig
                                },
                            ]}
                        >
                            <Input.Password autoComplete="on"/>
                        </Item>
                        <Item
                            wrapperCol={{
                                offset: 6,
                                span: 12,
                            }}
                        >
                            <Button type="primary" htmlType="submit" className={"login-button"}>
                                提交
                            </Button>
                        </Item>
                    </Form>
                </div>
            </div>

        </div>);
}