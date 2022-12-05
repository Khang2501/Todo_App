import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import AddTodo from "./component/AddTodo";
import TodoFilter from "./component/TodoFilter";

import AllTask from "./component/filterTask/AllTask";
import DoneTask from "./component/filterTask/DoneTask";
import ToDoTask from "./component/filterTask/ToDoTask";

import DeletedTask from "./component/deletedTask/DeletedTask";

import "./App.css";
function App() {
  return (
    <div className="App">
      <Header />
      <AddTodo />
      <TodoFilter />
      <Routes>
        <Route path="/" element={<AllTask />} />
        <Route path="/done" element={<DoneTask />} />
        <Route path="/todo" element={<ToDoTask />} />
        <Route path="*" element={<AllTask />} />
      </Routes>
      <DeletedTask />
    </div>
  );
}

export default App;
