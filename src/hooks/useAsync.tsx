import { useState } from "react";

interface State<T> {
  error: Error | null;
  data: T | null;
  status: "idle" | "loading" | "error" | "success";
}

const defaultInitialState: State<null> = {
  status: "idle",
  data: null,
  error: null,
};

const defaultConfig = {
  throwOnError: false,
};
const useAsync = <T,>(
  initialState?: State<T>,
  initialConfig?: typeof defaultConfig
) => {
  const [state, setState] = useState<State<T>>({
    ...defaultInitialState,
    ...initialState,
  });
  const config = { ...defaultConfig, ...initialConfig };
  const updateData = (data: T) => {
    setState({
      status: "idle",
      error: null,
      data,
    });
  };
  const setData = (data: T) =>
    setState({
      status: "success",
      error: null,
      data,
    });
  const setError = (error: Error) =>
    setState({
      error,
      status: "error",
      data: null,
    });

  const run = (promise: Promise<T>) => {
    if (!promise || !promise.then) {
      throw new Error("Please enter a Promise");
    }
    setState({
      ...state,
      status: "loading",
    });
    return promise.then(setData).catch((error) => {
      setError(error);
      if (config.throwOnError) return Promise.reject(error);
    });
  };
  return {
    isIdle: state.status === "idle",
    isLoading: state.status === "loading",
    isError: state.status === "error",
    isSuccess: state.status === "success",
    setData,
    setError,
    updateData,
    run,
    ...state,
  };
};

export default useAsync;
