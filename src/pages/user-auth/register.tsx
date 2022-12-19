import React from 'react';
import { Form, Input, Button } from 'antd';
import { AuthFrom, useAuth } from '../../context/auth-context';

const Register = () => {
  const { register } = useAuth();
  const handleSubmit = (values: AuthFrom) => {
    register(values);
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
        <Button type="primary" htmlType="submit" block>
          注册
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Register;
