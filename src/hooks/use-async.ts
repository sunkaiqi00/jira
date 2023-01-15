import { useCallback, useState } from 'react';

interface State<T> {
  stat: 'idle' | 'loading' | 'success' | 'error';
  data: T | null;
  error: Error | null;
}

interface Config {
  throwOnError: boolean;
}

const defaultInitialState: State<null> = {
  stat: 'idle',
  data: null,
  error: null,
};

const defaultConfig = {
  throwOnError: false,
};

const useAsync = <T>(initialState?: State<T>, initialConfig?: Config) => {
  const [state, setState] = useState({
    ...defaultInitialState,
    ...(initialState || {}),
  });

  const [retry, setRetry] = useState(() => () => {});

  const config = {
    ...defaultConfig,
    ...(initialConfig || {}),
  };

  const setData = useCallback(
    (data: T) =>
      setState((prevState) => ({
        ...prevState,
        data,
        stat: 'success',
        error: null,
      })),
    [setState]
  );

  const setError = useCallback(
    (error: Error) =>
      setState((prevState) => ({
        ...prevState,
        error,
        stat: 'error',
        data: null,
      })),
    [setState]
  );

  const run = useCallback(
    (promiseRequest: Promise<T>, retryConfig?: { retry: () => Promise<T> }) => {
      if (!promiseRequest || !promiseRequest.then) {
        throw new Error('请传入 promise 数据类型');
      }

      if (retryConfig?.retry) {
        setRetry(() => () => run(retryConfig.retry(), retryConfig));
      }

      setState((prevState) => ({ ...prevState, stat: 'loading' }));

      return promiseRequest
        .then((data) => {
          setData(data);
          return data;
        })
        .catch((error) => {
          setError(error);
          return config.throwOnError ? Promise.reject(error) : error;
        });
    },
    [config.throwOnError, setData, setError]
  );

  return {
    isIdle: state.stat === 'idle',
    isLoading: state.stat === 'loading',
    isSuccess: state.stat === 'success',
    isError: state.stat === 'error',
    setData,
    setError,
    run,
    retry,
    ...state,
  };
};

export default useAsync;
