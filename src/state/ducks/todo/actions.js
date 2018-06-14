import * as types from './types';

const addTodo = (todo) => (
  {
    type: types.ADD_TODO,
    todo,
  }
);


const setTodos = (todos) => (
  {
    type: types.SET_TODOS,
    todos,
  }
);


const removeTodo = todo => (
  {
    type: types.REMOVE_TODO,
    todo,
  }
);

const todos = [
  {id: 1, task: 'work1', complete: false},
  {id: 2, task: 'work2', complete: false},
  {id: 3, task: 'work3', complete: false},
  {id: 4, task: 'work4', complete: true},
  {id: 5, task: 'work5', complete: false}
];

const getTodos = () => (
  dispatch => (
    setTimeout(() => { dispatch(setTodos(todos)) }, 3000)
  )
);


export {
  addTodo,
  removeTodo,
  getTodos,
  setTodos,
};
