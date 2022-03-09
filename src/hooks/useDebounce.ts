import { useEffect, useState } from "react";

const useDebounce = <T>(value: T, delay: number = 300): T => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timerout = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => {
      clearTimeout(timerout);
    };
  }, [value, delay]);
  return debounceValue;
};

export default useDebounce;
