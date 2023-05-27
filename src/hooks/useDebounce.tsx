import { useState, useEffect, useRef } from "react";

export const useDebounce = (value: any, milliSeconds: any) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const ref = useRef<any>();

  useEffect(() => {
    clearTimeout(ref.current);
    ref.current = setTimeout(() => {
      setDebouncedValue(value);
    }, milliSeconds);
  }, [value, milliSeconds]);

  return debouncedValue;
};
