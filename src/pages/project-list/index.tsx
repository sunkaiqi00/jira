import React from 'react';
import { Typography } from 'antd';

import { useDebounce, useDocumentTitle } from '../../hooks';
import { useProjects, useProjectSearchParams, useUsers } from './util';

import SearchPanel from './search-panel';
import ProjectTable from './project-table';
import { ProjectInfo } from 'types/project';

export type SearchParam = Partial<Pick<ProjectInfo, 'name' | 'personId'>>;

export default function ProjectList() {
  useDocumentTitle('项目列表页', false);
  const [param, setParam] = useProjectSearchParams();
  const debounceParam = useDebounce<SearchParam>(param);

  const { projects, isLoading, error } = useProjects(debounceParam);
  const { users } = useUsers();

  return (
    <div style={{ padding: '2rem 3.2rem 0' }}>
      <h2>项目列表</h2>
      {/* @ts-ignore */}
      <SearchPanel param={param} users={users} setParam={setParam} />
      {error ? (
        <Typography.Text type={'danger'}>{error.message}</Typography.Text>
      ) : null}
      <ProjectTable dataSource={projects} users={users} loading={isLoading} />
    </div>
  );
}
