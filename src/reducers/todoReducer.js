export const initialState = [
  {
    id: 1233,
    name: "Learn React JS Framework",
    isComplete: false,
  },
];

export const ACTIONS = {
  ADD_TODO: "add_todo",
  DELETE_TODO: "delete_todo",
  TOGGLE_TODO: "toggle_todo",
  FILTER_TODO: "filter_todo",
  SORT_TODO: "sort_todo",
};

export const todoReducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [
        ...todos,
        { id: generateID(), name: action.payload.todo, isComplete: false },
      ];

    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);

    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      });

    case ACTIONS.SORT_TODO:
      let sort = action.payload.sort;
      return sortTodo(todos, sort);

    case ACTIONS.FILTER_TODO:
      let filter = action.payload.filter;
      return filterTodo(todos, filter);

    default:
      return todos;
  }
};

const generateID = () => {
  let id = Math.random(1000);
  return id;
};

const filterTodo = (todos, filter) => {
  switch (filter) {
    case "All":
      return todos;

    case "Incompleted":
      const inCompletedTodos = [];
      todos.forEach((todo) => {
        if (!todo.isComplete) {
          inCompletedTodos.push(todo);
        }
      });
      return inCompletedTodos;

    case "Completed":
      const CompletedTodos = [];
      todos.forEach((todo) => {
        if (todo.isComplete) {
          CompletedTodos.push(todo);
        }
      });
      return CompletedTodos;

    default:
      return todos;
  }
};

const sortTodo = (todos, sort) => {
  const inCompletedTodos = [];
  const CompletedTodos = [];

  switch (sort) {
    case "All":
      return todos;

    case "Incompleted":
      todos.forEach((todo) => {
        if (!todo.isComplete) {
          inCompletedTodos.push(todo);
        } else {
          CompletedTodos.push(todo);
        }
      });
      return [...inCompletedTodos, ...CompletedTodos];

    case "Completed":
      todos.forEach((todo) => {
        if (!todo.isComplete) {
          inCompletedTodos.push(todo);
        } else {
          CompletedTodos.push(todo);
        }
      });
      return [...CompletedTodos, ...inCompletedTodos];

    default:
      return todos;
  }
};
