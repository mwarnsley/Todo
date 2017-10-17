import {combineReducers} from 'redux';

import {todoReducer} from './todo-reducer';

// Combining the reducers
export default combineReducers({
  todos: todoReducer,
});
