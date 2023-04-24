import React, { createContext, useReducer } from "react";
import { todoReducer, initialState } from "../reducers/todoReducer";

export const TodoContext = createContext();

function TodoContextProvider({ children }) {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const value = {
    todos,
    dispatch,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export default TodoContextProvider;
