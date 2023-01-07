import { useMemo } from 'react';
import { URLSearchParamsInit, useSearchParams } from 'react-router-dom';
import { cleanObject } from 'utils/obj';

export const useUrlQueryParams = <K extends string>(keys: K[]) => {
  const [searchParams, setSearchParams] = useSearchParams();
  return [
    useMemo(() => {
      return keys.reduce(
        (prev, key) => {
          prev[key] = searchParams.get(key) || '';
          return prev;
        },
        {} as {
          [P in K]: string;
        }
      );
      // 依赖keys会导致无限循环 keys是普通对象
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchParams]),
    (params: Partial<{ [P in K]: any }>) => {
      const param = cleanObject({
        ...Object.fromEntries(searchParams),
        ...params,
      }) as URLSearchParamsInit;
      setSearchParams(param);
    },
  ] as const;
};
