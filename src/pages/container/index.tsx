import React from 'react';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { useAuth } from 'context/auth-context';
import UserAuth from 'pages/user-auth';

import ProjectList from 'pages/project-list';
import PageHeader from 'components/page-header';
import { Container } from 'components/lib';
import ProjectScreen from 'pages/project';

const ContainerWrapper = () => {
  const { user } = useAuth();
  return (
    <BrowserRouter>
      {user ? (
        <Container>
          <PageHeader />
          <Routes>
            <Route path="/projects" element={<ProjectList />} />
            <Route path="/projects/:projectId/*" element={<ProjectScreen />} />
          </Routes>
        </Container>
      ) : (
        <UserAuth />
      )}
    </BrowserRouter>
  );
};

export default ContainerWrapper;
