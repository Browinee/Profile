import { useEffect } from "react";

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, [callback]);
};
export default useMount;
