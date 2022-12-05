import { useState, useEffect } from "react";
import classes from "./DeletedTask.module.css";

import { useRepairAPI, useReload } from "../hook/useRepairAPI";

const DeletedTask = () => {
  const sendRequest = useRepairAPI();
  const reloadRequest = useReload();
  const [idComplete, setIdComplete] = useState([]);
  const [idAll, setIdAll] = useState([]);

  useEffect(() => {
    const applyData = (data) => {
      const loadTodo = [];
      for (const key in data) {
        loadTodo.unshift({
          id: key,
          completed: data[key].completed,
        });
      }

      const done = loadTodo.filter((todo) => todo.completed);

      setIdAll(loadTodo);
      setIdComplete(done);
    };
    reloadRequest(applyData);
  }, [reloadRequest]);

  const deletedHandler = (todo) => {
    todo.map((id) =>
      sendRequest({
        url: `https://todo-list-d3b5b-default-rtdb.firebaseio.com/todo/${id.id}.json`,
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: null,
      })
    );
  };

  return (
    <div className={classes["btn-deleted"]}>
      <button
        onClick={() => {
          deletedHandler(idComplete);
        }}
      >
        Deleted done tasks
      </button>
      <button
        onClick={() => {
          deletedHandler(idAll);
        }}
      >
        Deleted all tasks
      </button>
    </div>
  );
};

export default DeletedTask;
