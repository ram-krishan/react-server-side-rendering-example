import * as types from './types';

const addTodo = (todo) => (
  {
    type: types.ADD_TODO,
    todo,
  }
);


const removeTodo = todo => (
  {
    type: types.REMOVE_TODO,
    todo,
  }
);

export {
  addTodo,
  removeTodo,
};
