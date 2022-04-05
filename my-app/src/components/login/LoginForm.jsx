import React from "react"
import {Button, Form, Input} from "antd";
import Checkbox from "antd/es/checkbox/Checkbox";

export const LoginForm = (props) => {

    const onFinish = (values) => {
        props.onFinish({email: values.login, password: values.password, rememberMe: values.remember})
    }

    return (
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={props.onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Login"
                name="login"
                rules={[
                    {
                        required: true,
                        message: 'Please input your login!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}
