import { initialState } from "./initialState";
import { CREATE, REMOVE, TOGGLE, DOING_FILTER, COMPLE_FILTER, CHANGE_TEXT } from "../Actions/action";

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE:
      return Object.assign({}, state, { todos: [...state.todos, action.payload], doing: [...state.doing, action.payload] });

    case REMOVE:
      const removeTodos = state.todos.filter((el) => el.id !== action.payload.id);
      const removeDoing = state.doing.filter((el) => el.id !== action.payload.id);
      const removeCompleted = state.completed.filter((el) => el.id !== action.payload.id);
      return Object.assign({}, state, { todos: removeTodos, doing: removeDoing, completed: removeCompleted });

    case TOGGLE:
      const toggleTodos = state.todos.map((el) => (el.id === action.payload.id ? { ...el, done: !el.done } : el));
      const toggleDoing = state.doing.filter((el) => el.id !== action.payload.id);
      const toggleCompleted = state.completed.filter((el) => el.id !== action.payload.id);
      return Object.assign({}, state, { todos: toggleTodos, doing: toggleDoing, completed: toggleCompleted });

    case DOING_FILTER:
      const doingFilter = state.todos.filter((el) => el.done === action.payload);
      return Object.assign({}, state, { doing: doingFilter });

    case COMPLE_FILTER:
      const compleFilter = state.todos.filter((el) => el.done === action.payload);
      return Object.assign({}, state, { completed: compleFilter });

    case CHANGE_TEXT:
      const changeTodos = state.todos.map((el) => {
        if (el.id === action.payload.id) return { ...el, text: action.payload.text };
        return el;
      });
      const changeDoing = state.doing.map((el) => {
        if (el.id === action.payload.id) return { ...el, text: action.payload.text };
        return el;
      });
      const changeCompleted = state.completed.map((el) => {
        if (el.id === action.payload.id) return { ...el, text: action.payload.text };
        return el;
      });

      return Object.assign({}, state, { todos: changeTodos, doing: changeDoing, completed: changeCompleted });

    default:
      return state;
  }
};
