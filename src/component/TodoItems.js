import classes from "./TodoItems.module.css";
const TodoItems = (props) => {
  const className = props.todo.completed
    ? `${classes["todo-items"]} ${classes.completed}`
    : `${classes["todo-items"]}`;
  return (
    <li className={className}>
      <input
        type="checkbox"
        checked={props.todo.completed}
        onChange={() => {
          props.changeHanler(
            props.todo.id,
            props.todo.title,
            props.todo.completed
          );
        }}
      />
      {props.todo.title}
      <button
        className={classes["todo-btn"]}
        onClick={() => {
          props.deleted(props.todo.id);
        }}
      >
        X
      </button>
    </li>
  );
};
export default TodoItems;
