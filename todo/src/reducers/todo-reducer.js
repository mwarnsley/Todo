import {map, filter} from 'lodash';

const todoList = {
  todos: [],
  display: 'All',
};

const todoId = 1;

export function todoReducer(state = todoList, action) {
  switch (action.type) {
    case 'ADD_TODO':
      const todo = action.payload;
      const todoWithId = {
        ...todo,
        id: todoId++,
      };
      return {
        ...state,
        todos: [...state.todos, todoWithId],
      };
      break;
    case 'UPDATE_TODO':
      const stateTodos = state.todos;
      const updatedTodoId = action.payload;
      const todos = map(stateTodos, todo => {
        if (updatedTodoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      return {
        ...state,
        todos,
      };
      break;
    case 'FILTER_TODO_LIST':
      const display = action.payload;
      return {
        ...state,
        display,
      };
      break;
    default:
      return state;
  }
  return state;
}
