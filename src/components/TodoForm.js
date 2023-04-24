import React, { useRef, useState, useContext } from "react";
import Alert from "./Alert";
import { TodoContext } from "../contexts/TodoContext";
import { ACTIONS } from "../reducers/todoReducer";

const TodoForm = () => {
  const { dispatch } = useContext(TodoContext);
  const todoInput = useRef();
  const [isAlert, setIsAlert] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = todoInput.current.value;

    if (!todo || todo.trim().length === 0) {
      setIsError((prev) => !prev);
    } else {
      dispatch({ type: ACTIONS.ADD_TODO, payload: { todo: todo } });
      setIsAlert((prev) => !prev);
      setIsError(false);
      todoInput.current.value = "";
    }
  };
  return (
    <section className="container todo-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="Todo Name">Enter Todo</label>
        <input
          style={{ borderColor: isError ? "red" : null }}
          ref={todoInput}
          type="text"
          placeholder="E.g Learn React JS"
        />
        <button type="submit">Add</button>
      </form>
      {isAlert && <Alert text="Todo Added!!!" setIsAlert={setIsAlert} />}
    </section>
  );
};

export default TodoForm;
