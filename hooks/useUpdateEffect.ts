import { useEffect, useRef } from "react";

export function useUpdateEffect(callback: () => void, dependencies: any[]) {
  const updateRef = useRef(false);

  useEffect(() => {
    return () => {
      updateRef.current = false;
    }
  }, [])

  useEffect(() => {
    if (!updateRef.current) {
      updateRef.current = true;
    } else {
      return callback();
    }
  }, dependencies);
  
}