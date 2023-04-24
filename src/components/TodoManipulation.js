import React, { useRef, useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { ACTIONS } from "../reducers/todoReducer";

const TodoManipulation = () => {
  const { dispatch } = useContext(TodoContext);
  const sortRef = useRef();
  const filterRef = useRef();

  const handleSort = () => {
    const sortInput = sortRef.current.value;
    dispatch({ type: ACTIONS.SORT_TODO, payload: { sort: sortInput } });
  };
  const handleFilter = () => {
    const filterInput = filterRef.current.value;
    dispatch({ type: ACTIONS.FILTER_TODO, payload: { filter: filterInput } });
  };

  return (
    <section className="container todo-manipulation">
      <section className="todo-sort">
        <label htmlFor="Sorting Todo">Sort Todo</label>
        <select
          ref={sortRef}
          onChange={handleSort}
          name="sort-todo"
          id="sort-todo"
        >
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Incompleted">Incompleted</option>
        </select>
      </section>
      <section className="todo-filter">
        <label htmlFor="Filtering Todo">Filter Todo</label>
        <select
          ref={filterRef}
          onChange={handleFilter}
          name="sort-todo"
          id="sort-todo"
        >
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Incompleted">Incompleted</option>
        </select>
      </section>
    </section>
  );
};

export default TodoManipulation;
