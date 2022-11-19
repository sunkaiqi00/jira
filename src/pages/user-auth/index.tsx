import React, { useState } from 'react';
import Login from '../login';
import Register from './register';

const UserAuth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      {isLogin ? <Login /> : <Register />}
      <div>
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? '没有账号，前往注册' : '已有账号前往登录'}
        </button>
      </div>
    </div>
  );
};

export default UserAuth;
