import { useHttp } from 'api/http';
import { useMount } from 'hooks';
import { useUrlQueryParams } from 'hooks/url';
import useAsync from 'hooks/use-async';
import { useEffect, useMemo } from 'react';
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

// 项目有列表搜索参数
export const useProjectSearchParams = () => {
  const [param, setParam] = useUrlQueryParams(['name', 'personId']);
  return [
    useMemo(
      () => ({ ...param, personId: Number(param.personId) || undefined }),
      [param]
    ),
    setParam,
  ] as const;
};
