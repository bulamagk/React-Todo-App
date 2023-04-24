import React from "react";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import TodoManipulation from "./components/TodoManipulation";
import TodoHeading from "./components/TodoHeading";

const App = () => {
  return (
    <React.Fragment>
      <TodoHeading />
      <TodoManipulation />
      <TodoForm />
      <Todos />
    </React.Fragment>
  );
};

export default App;
