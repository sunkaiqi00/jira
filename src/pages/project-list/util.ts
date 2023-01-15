import { useHttp } from 'api/http';
import { useMount } from 'hooks';
import { useUrlQueryParams } from 'hooks/url';
import useAsync from 'hooks/use-async';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { ProjectInfo } from 'types/project';
import { UserInfo } from 'types/user';
import { cleanObject } from 'utils/obj';
import { SearchParam } from '.';

export const useProjects = (params: SearchParam = {}) => {
  const http = useHttp();
  const [searchParam] = useState(params);
  const { run, data, ...result } = useAsync<ProjectInfo[]>();
  const getProject = useCallback(
    () => http('/projects', { data: cleanObject(searchParam) }),
    [http, searchParam]
  );
  useEffect(() => {
    run(getProject(), { retry: getProject });
  }, [searchParam, getProject, run]);

  return {
    projects: data || [],
    run,
    ...result,
  };
};

export const useUsers = () => {
  const http = useHttp();
  const { run, data, ...result } = useAsync<UserInfo[]>();
  useMount(
    useCallback(() => {
      run(http('/users'));
    }, [run, http])
  );

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

// 编辑
export const useEditProject = () => {
  const { run, ...result } = useAsync();
  const http = useHttp();
  const edit = (params: Partial<ProjectInfo>) => {
    return run(
      http(`/projects/${params.id}`, {
        method: 'PATCH',
        data: params,
      })
    );
  };
  return {
    edit,
    ...result,
  };
};

// 新增
export const useAddProject = () => {
  const { run, ...result } = useAsync();
  const http = useHttp();
  const add = (params: Partial<ProjectInfo>) => {
    return run(
      http(`/projects/${params.id}`, {
        method: 'POST',
        data: params,
      })
    );
  };
  return {
    add,
    ...result,
  };
};
