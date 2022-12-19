import React, { useEffect, useState } from 'react';
import SearchPanel from './search-panel';
import ProjectTable from './project-table';
import { UserInfo } from '../../types/user';
import { ProjectInfo } from '../../types/project';
import { cleanObject } from '../../utils/obj';
import { useDebounce, useMount } from '../../hook';
import { useHttp } from '../../api/http';
export interface SearchParam {
  name: string;
  personId: number | string;
}
export default function ProjectList() {
  const [param, setParam] = useState<SearchParam>({
    name: '',
    personId: '',
  });
  const debounceParam = useDebounce<SearchParam>(param);
  const [users, setUsers] = useState<UserInfo[]>([]);
  const [projects, setProjects] = useState<ProjectInfo[]>([]);
  const http = useHttp();

  useMount(() => {
    http('/users').then(setUsers);
  });

  useEffect(() => {
    http('/projects', { data: cleanObject(debounceParam) }).then(setProjects);
  }, [debounceParam, http]);

  return (
    <div style={{ padding: '2rem 3.2rem 0' }}>
      <h2>项目列表</h2>
      <SearchPanel param={param} users={users} setParam={setParam} />
      <ProjectTable projects={projects} users={users} />
    </div>
  );
}
