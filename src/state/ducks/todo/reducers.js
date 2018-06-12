import * as types from './types';


const initialState = {
  todos: [
    {id: 1, task: 'work1', complete: false},
    {id: 2, task: 'work2', complete: false},
    {id: 3, task: 'work3', complete: false},
    {id: 4, task: 'work4', complete: true},
    {id: 5, task: 'work5', complete: false}
  ]
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    // do reducer stuff

    case types.ADD_TODO:
    break;

    case types.REMOVE_TODO:
    break;

    default: return state;
  }
};


export default todoReducer;
