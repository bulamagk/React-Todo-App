import React from "react";
import { ACTIONS } from "../reducers/todoReducer";

const TodoItem = ({ todo, dispatch }) => {
  const { id, name, isComplete } = todo;

  const handleDelete = () => {
    dispatch({ type: ACTIONS.DELETE_TODO, payload: { id } });
  };

  const handleToggle = () => {
    dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id } });
  };

  return (
    <li
      className="todo__item"
      style={{ borderLeftColor: isComplete && "dodgerblue" }}
    >
      <p className="todo__text">{name}</p>
      <span className="todo__state">
        {isComplete ? "Completed" : "Incomplete"}
      </span>
      <button onClick={handleToggle} className="btn btn--black">
        Toggle
      </button>
      <button onClick={handleDelete} className="btn btn--red">
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
