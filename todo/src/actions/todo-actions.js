// Function that adds the todo to the todo list
export function addTodo(todo) {
  return {
    type: 'ADD_TODO',
    payload: todo,
  };
}

// Function that updates the todo to be completed or not
export function updateTodo(id) {
  return {
    type: 'UPDATE_TODO',
    payload: id,
  };
}

// Function to show all of the todos
export function filterTodoList(display) {
  return {
    type: 'FILTER_TODO_LIST',
    payload: display,
  };
}
