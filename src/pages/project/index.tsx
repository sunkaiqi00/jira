import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';

import EpicScreen from 'pages/epic';
import KanbanScreen from 'pages/kanban';

const ProjectScreen = () => {
  return (
    <div>
      <h1>ProjectScreen</h1>
      <div>
        <Link to={'kanban'}>kanban</Link>
        <Link to={'epic'}>epic</Link>
      </div>
      <div>
        <Routes>
          <Route path="/kanban" element={<KanbanScreen />} />
          <Route path="/epic" element={<EpicScreen />} />
          <Route path="*" element={<Navigate to={'kanban'} />} />
        </Routes>
      </div>
    </div>
  );
};

export default ProjectScreen;
