import React from 'react';
import {Provider} from 'react-redux';

// Importing the middleware and thunks
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';

// Import combined reducers
import reducers from './src/reducers/index';

import TodoApp from './src/components/TodoApp';

// Create the middleware logger for showing logs and including the thunks
const middleware = applyMiddleware(thunk);
// Create the store passing in the reducer
const store = createStore(reducers, middleware);

const App = () => (
  <Provider store={store}>
    <TodoApp />
  </Provider>
);

export default App;
