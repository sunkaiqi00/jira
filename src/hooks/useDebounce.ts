import { useEffect, useState } from "react";

const useDebounce = (value: any, delay: number = 300) => {
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
