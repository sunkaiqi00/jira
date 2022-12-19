import { useEffect, useState } from 'react';

export const useMount = (fn: Function) => {
  useEffect(() => {
    fn && fn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export const useDebounce = <T>(value: any, delay: number = 300): T => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounceValue;
};
