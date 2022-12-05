import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes["header_container"]}>
      <h1>Simple Todo App</h1>
    </div>
  );
};

export default Header;
