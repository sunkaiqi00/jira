import React from 'react';
import { useAuth } from './context/auth-context';

import ProjectList from './pages/project-list';
import UserAuth from './pages/user-auth';
import './App.css';
import { Container, FullPageError } from 'components/lib';
import PageHeader from 'components/page-header';
import ErrorBoundary from 'components/error-boundary';

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      <ErrorBoundary fullbackRender={FullPageError}>
        {user ? (
          <Container>
            <PageHeader />
            <ProjectList />
          </Container>
        ) : (
          <UserAuth />
        )}
      </ErrorBoundary>
    </div>
  );
}

export default App;
