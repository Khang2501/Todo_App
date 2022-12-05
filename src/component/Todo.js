import classes from "./Todo.module.css";
import TodoItems from "./TodoItems";
import { useRepairAPI } from "./hook/useRepairAPI";
const Todo = ({ todos }) => {
  const sendRequest = useRepairAPI();

  const checkedHanler = (id, todo, completed) => {
    sendRequest({
      url: `https://todo-list-d3b5b-default-rtdb.firebaseio.com/todo/${id}.json`,
      method: "PUT",
      headers: { "Content-type": "text/html" },
      body: {
        title: todo,
        completed: !completed,
      },
    });
  };

  const deletedHandler = (id) => {
    sendRequest({
      url: `https://todo-list-d3b5b-default-rtdb.firebaseio.com/todo/${id}.json`,
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: null,
    });
  };

  return (
    <div>
      <ul className={classes["todo-list"]}>
        {todos.map((todo) => {
          return (
            <TodoItems
              key={todo.id}
              todo={todo}
              changeHanler={checkedHanler}
              deleted={deletedHandler}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
