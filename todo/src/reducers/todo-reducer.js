import initialState from './initial-state';
import {map} from 'lodash';

const todoId = 1;

export function todoReducer(state = initialState, action) {
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
    default:
      return state;
  }
  return state;
}
