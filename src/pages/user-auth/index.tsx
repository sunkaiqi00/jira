import React, { useState } from 'react';
import { Button, Card, Form, Input } from 'antd';

import Login from './login';
import Register from './register';

const UserAuth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <Card style={{ width: '450px' }}>
        {isLogin ? <Login /> : <Register />}
        <div style={{ textAlign: 'right' }}>
          <Button onClick={() => setIsLogin(!isLogin)} type="link">
            {isLogin ? '没有账号? 前往注册' : '已有账号? 前往登录'}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default UserAuth;
