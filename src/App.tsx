import React from 'react';
import { useAuth } from './context/auth-context';

import ProjectList from './pages/project-list';
import UserAuth from './pages/user-auth';
import './App.css';
import { Container } from 'components/lib';
import PageHeader from 'components/page-header';

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      {user ? (
        <Container>
          <PageHeader />
          <ProjectList />
        </Container>
      ) : (
        <UserAuth />
      )}
    </div>
  );
}

export default App;
