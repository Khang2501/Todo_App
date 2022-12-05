import classes from "./AddTodo.module.css";
import { useState } from "react";
import { FaBook } from "react-icons/fa";
import { useRepairAPI } from "./hook/useRepairAPI";
const AddTodo = () => {
  const sendRequest = useRepairAPI();

  const fetchTodoHandler = (todo) => {
    sendRequest({
      url: `https://todo-list-d3b5b-default-rtdb.firebaseio.com/todo.json`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: {
        title: todo,
        completed: false,
      },
    });
  };

  const [addTodo, setAddTodo] = useState("");

  const addTodoChangeHandler = (event) => {
    setAddTodo(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (addTodo !== "") {
      fetchTodoHandler(addTodo);
    }
    setAddTodo("");
  };

  return (
    <form onSubmit={submitHandler} className={classes["add_todo"]}>
      <div className={classes["add_todo-input"]}>
        <FaBook />
        <input
          placeholder="Add Todo ..."
          type="text"
          value={addTodo}
          onChange={addTodoChangeHandler}
        />
      </div>
      <button>Add new todo</button>
    </form>
  );
};

export default AddTodo;
