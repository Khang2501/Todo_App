import classes from "./TodoFilter.module.css";
import { useNavigate } from "react-router-dom";
const TodoFilter = () => {
  const BTN_FILTER = [
    { title: "ALL", nav: "/" },
    { title: "Done", nav: "/done" },
    { title: "Todo", nav: "/todo" },
  ];
  const navigate = useNavigate();

  return (
    <div className={classes.filter}>
      {BTN_FILTER.map((btn) => (
        <button
          key={btn.title}
          onClick={() => {
            navigate(btn.nav);
          }}
        >
          {btn.title}
        </button>
      ))}
    </div>
  );
};

export default TodoFilter;
