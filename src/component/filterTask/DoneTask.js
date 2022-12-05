import React, { Fragment, useState, useEffect } from "react";
import { useReload } from "../hook/useRepairAPI";

import Todo from "../Todo";

const DoneTask = () => {
  const [todoList, setTodoList] = useState([]);
  const reloadRequest = useReload();

  useEffect(() => {
    const applyData = (data) => {
      const loadTodo = [];
      for (const key in data) {
        loadTodo.unshift({
          id: key,
          title: data[key].title,
          completed: data[key].completed,
        });
      }
      const done = loadTodo.filter((todo) => todo.completed);
      setTodoList(done);
    };
    reloadRequest(applyData);
  }, [reloadRequest]);

  return (
    <Fragment>
      <Todo todos={todoList} />
    </Fragment>
  );
};

export default DoneTask;
