import React, { useState } from 'react';
import { Typography } from 'antd';

import { useDebounce, useDocumentTitle } from '../../hook';
import { useProjects, useUsers } from './util';

import SearchPanel from './search-panel';
import ProjectTable from './project-table';

export interface SearchParam {
  name: string;
  personId: number | string;
}

export default function ProjectList() {
  const [param, setParam] = useState<SearchParam>({
    name: '',
    personId: '',
  });

  useDocumentTitle('项目列表页', false);

  const debounceParam = useDebounce<SearchParam>(param);

  const { projects, isLoading, error } = useProjects(debounceParam);
  const { users } = useUsers();

  return (
    <div style={{ padding: '2rem 3.2rem 0' }}>
      <h2>项目列表</h2>
      <SearchPanel param={param} users={users} setParam={setParam} />
      {error ? (
        <Typography.Text type={'danger'}>{error.message}</Typography.Text>
      ) : null}
      <ProjectTable dataSource={projects} users={users} loading={isLoading} />
    </div>
  );
}
