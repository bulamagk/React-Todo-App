import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../contexts/TodoContext";

const Todos = () => {
  const { todos, dispatch } = useContext(TodoContext);

  const totalTodos = todos.length;

  return (
    <section className="todo container">
      {totalTodos === 0 ? <p>You Dont Have Any Todo</p> : null}
      <ul className="todo__list">
        {todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />;
        })}
      </ul>
    </section>
  );
};

export default Todos;
