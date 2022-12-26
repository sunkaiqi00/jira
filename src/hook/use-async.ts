import { useCallback, useState } from 'react';

interface State<T> {
  stat: 'idle' | 'loading' | 'success' | 'error';
  data: T | null;
  error: Error | null;
}

const defaultInitialState: State<null> = {
  stat: 'idle',
  data: null,
  error: null,
};

const useAsync = <T>(initialState?: State<T>) => {
  const [state, setState] = useState({
    ...defaultInitialState,
    ...(initialState || {}),
  });

  const setData = (data: T) => setState({ data, stat: 'success', error: null });

  const setError = (error: Error) =>
    setState({ error, stat: 'error', data: null });

  const run = (promiseRequest: Promise<T>) => {
    if (!promiseRequest || !promiseRequest.then) {
      throw new Error('请传入 promise 数据类型');
    }
    setState({ ...state, stat: 'loading' });

    return promiseRequest
      .then((data) => {
        setData(data);
        return data;
      })
      .catch((error) => {
        setError(error);
        return error;
      });
  };

  return {
    isIdle: state.stat === 'idle',
    isLoading: state.stat === 'loading',
    isSuccess: state.stat === 'success',
    isError: state.stat === 'error',
    setData,
    setError,
    run,
    ...state,
  };
};

export default useAsync;
