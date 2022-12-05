import React, { Fragment, useState, useEffect } from "react";

import { useReload } from "../hook/useRepairAPI";
import Todo from "../Todo";
const AllTask = () => {
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

      setTodoList(loadTodo);
    };
    reloadRequest(applyData);
  }, [reloadRequest]);

  return (
    <Fragment>
      <Todo todos={todoList} />
    </Fragment>
  );
};

export default AllTask;
