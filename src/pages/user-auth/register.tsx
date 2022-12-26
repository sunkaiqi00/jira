import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { AuthFrom, useAuth } from '../../context/auth-context';
import useAsync from 'hook/use-async';

const Register = () => {
  const { run, isLoading } = useAsync(undefined, { throwOnError: true });
  const { register } = useAuth();
  const handleSubmit = async ({
    cpassword,
    ...values
  }: AuthFrom & { cpassword: string }) => {
    if (cpassword !== values.password)
      return message.error('请确认密码是否一致');

    try {
      await run(register(values));
      message.success('注册成功，即将跳转至首页');
    } catch (error: any) {
      console.log(error);

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
      <Form.Item
        name={'cpassword'}
        rules={[{ required: true, message: '请确认密码' }]}
      >
        <Input placeholder="请确认密码" />
      </Form.Item>
      <Form.Item>
        <Button loading={isLoading} type="primary" htmlType="submit" block>
          注册
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Register;
