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
        label={'用户名：'}
        name={'username'}
        rules={[{ required: true, message: '请输入用户名' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={'密码：'}
        name={'password'}
        rules={[{ required: true, message: '请输入密码' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          注册
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Register;
