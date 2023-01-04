import React, { useState } from 'react';
import { Button, Card, Divider, Form, Input } from 'antd';

import Login from './login';
import Register from './register';
import {
  Container,
  Header,
  LeftBackground,
  RightBackground,
  ShadowCard,
  Title,
} from './styled';
import { useDocumentTitle } from 'hook';

const UserAuth = () => {
  const [isLogin, setIsLogin] = useState(true);

  useDocumentTitle('登陆注册页');

  return (
    <Container>
      <Header />
      <LeftBackground />
      <RightBackground />
      <Title>{isLogin ? '请登录' : '请注册'}</Title>
      <ShadowCard>
        {isLogin ? <Login /> : <Register />}
        <Divider />
        <a
          onClick={() => setIsLogin(!isLogin)}
          style={{ display: 'block', textAlign: 'center' }}
        >
          {isLogin ? '没有账号? 注册新账号' : '已经有账号? 登录登录'}
        </a>
      </ShadowCard>
    </Container>
  );
};

export default UserAuth;
