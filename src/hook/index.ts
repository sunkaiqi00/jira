import { useEffect, useState } from "react";

export const useMount = (fn: Function) => {
  useEffect(() => {
    fn && fn();
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
