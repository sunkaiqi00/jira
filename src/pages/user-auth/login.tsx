import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { AuthFrom, useAuth } from '../../context/auth-context';
import useAsync from 'hooks/use-async';

const Login = () => {
  const { login } = useAuth();
  const { run, isLoading } = useAsync(undefined, { throwOnError: true });

  const handleSubmit = async (values: AuthFrom) => {
    try {
      await run(login(values));
      message.success('登录成功，即将跳转至首页');
    } catch (error: any) {
      message.error(error.message);
    }
  };

  return (
    <Form onFinish={handleSubmit} labelCol={{ span: 4 }}>
      <Form.Item
        name={'username'}
        rules={[{ required: true, message: '请输入用户名' }]}
      >
        <Input placeholder="请输入用户名" />
      </Form.Item>
      <Form.Item
        name={'password'}
        rules={[{ required: true, message: '请输入密码' }]}
      >
        <Input placeholder="请输入密码" />
      </Form.Item>
      <Form.Item>
        <Button loading={isLoading} type="primary" htmlType="submit" block>
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
