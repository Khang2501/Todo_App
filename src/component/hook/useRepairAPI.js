import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useRepairAPI = () => {
  const dispatch = useDispatch();

  const sendRequest = async (requestConfig) => {
    await fetch(requestConfig.url, {
      method: requestConfig.method ? requestConfig.method : "GET",
      headers: requestConfig.headers ? requestConfig.headers : {},
      body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
    });
    dispatch({ type: "RELOAD" });
  };
  return sendRequest;
};

export const useReload = () => {
  const reload = useSelector((state) => state.reload);
  const reloadRequest = useCallback(
    async (applyData) => {
      try {
        const response = await fetch(
          "https://todo-list-d3b5b-default-rtdb.firebaseio.com/todo.json"
        );
        const data = await response.json();
        applyData(data);
      } catch (error) {}
    },
    [reload]
  );

  return reloadRequest;
};
