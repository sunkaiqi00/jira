import React from 'react';
import { Button } from 'antd';
import { useAuth } from './context/auth-context';

import ProjectList from './pages/project-list';
import UserAuth from './pages/user-auth';
import './App.css';

function App() {
  const { user, logout } = useAuth();
  return (
    <div className="App">
      {user ? (
        <div>
          <ProjectList />
          <div>
            <Button onClick={logout}>退出登录</Button>
          </div>
        </div>
      ) : (
        <UserAuth />
      )}
    </div>
  );
}

export default App;
