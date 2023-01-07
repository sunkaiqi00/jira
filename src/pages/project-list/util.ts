import { useHttp } from 'api/http';
import { useMount } from 'hooks';
import useAsync from 'hooks/use-async';
import { useEffect } from 'react';
import { ProjectInfo } from 'types/project';
import { UserInfo } from 'types/user';
import { cleanObject } from 'utils/obj';
import { SearchParam } from '.';

export const useProjects = (searchParam: SearchParam) => {
  const http = useHttp();
  const { run, data, ...result } = useAsync<ProjectInfo[]>();
  useEffect(() => {
    run(http('/projects', { data: cleanObject(searchParam) }));
  }, [searchParam]);

  return {
    projects: data || [],
    run,
    ...result,
  };
};

export const useUsers = () => {
  const http = useHttp();
  const { run, data, ...result } = useAsync<UserInfo[]>();
  useMount(() => {
    run(http('/users'));
  });

  return {
    users: data || [],
    run,
    ...result,
  };
};
