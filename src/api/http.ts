import qs from 'qs';
import { apiUrl } from '../config';
import { logout } from '../auth-provider';
import { useAuth } from '../context/auth-context';
import { useCallback } from 'react';

interface FetchConfig extends RequestInit {
  token?: string;
  data?: object;
}

export const http = (
  url: string,
  { data, token, ...customConfig }: FetchConfig = {}
) => {
  const config = {
    method: 'GET',
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
      'Content-Type': data ? 'application/json' : '',
    },
    ...customConfig,
  };

  let _url = url;
  if (config.method.toUpperCase() === 'GET') {
    _url = url + `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data);
  }

  return window.fetch(`${apiUrl + _url}`, config).then(async (res) => {
    if (res.status === 401) {
      await logout();
      window.location.reload();
      return Promise.reject({ message: '请重新登录' });
    }
    const data = await res.json();
    if (res.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
};

export const useHttp = () => {
  const { user } = useAuth();

  return useCallback(
    (...[url, config]: Parameters<typeof http>) =>
      http(url, {
        ...config,
        token: user?.token,
      }),
    [user]
  );
};
