import initialState from './initial-state';

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      const todo = action.payload;
      return {
        ...state,
        todos: [...state.todos, todo],
      };
      break;
    default:
      return state;
  }
  return state;
}
