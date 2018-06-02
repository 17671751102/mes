import React from 'react';
import '../css/login.css';
import log from '../img/log.png'
import {Form, Input, Button} from 'antd';
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.history.push('/main')
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <div className="ingobg">
            <img src={log} alt=""/>
            <h1>广东省关键信息基础设备设施保护系统</h1>
            <div className="logform">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem label="用户名">
                        {getFieldDecorator('用户名', {
                            rules: [{ required: true, message: '请输入用户名' }],
                        })(
                            <Input autoComplete="off"/>
                        )}
                    </FormItem>
                    <FormItem label="密码">
                        {getFieldDecorator('密码', {
                            rules: [{ required: true, message: '请输入密码' }],
                        })(
                            <Input type="password" autoComplete="off"/>
                        )}
                    </FormItem>
                    <FormItem label="验证码">
                        {getFieldDecorator('验证码', {
                            rules: [{ required: true, message: '请输入验证码' }],
                        })(
                            <Input autoComplete="off"/>
                        )}
                    </FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                </Form>
            </div>
        </div>
    );
  }
}
const LoginForm = Form.create()(NormalLoginForm);
export default LoginForm