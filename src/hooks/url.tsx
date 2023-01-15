import { useMemo, useState } from 'react';
import { URLSearchParamsInit, useSearchParams } from 'react-router-dom';
import { cleanObject } from 'utils/obj';

export const useUrlQueryParams = <K extends string>(keys: K[]) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [stateKeys] = useState(keys);
  return [
    useMemo(() => {
      return stateKeys.reduce(
        (prev, key) => {
          prev[key] = searchParams.get(key) || '';
          return prev;
        },
        {} as {
          [P in K]: string;
        }
      );
    }, [searchParams, stateKeys]),
    (params: Partial<{ [P in K]: any }>) => {
      const param = cleanObject({
        ...Object.fromEntries(searchParams),
        ...params,
      }) as URLSearchParamsInit;
      setSearchParams(param);
    },
  ] as const;
};
