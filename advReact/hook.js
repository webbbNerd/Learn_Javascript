import { useEffect, useState } from "react";

export const useDebounce = (input, delay = 300) => {
  const [value, setValue] = useState();
  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(input);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
};
