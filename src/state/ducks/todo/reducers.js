import * as types from './types';


const initialState = {
  todos: []
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    // do reducer stuff

    case types.ADD_TODO:
    break;
    case types.SET_TODOS:
      return Object.assign({}, state, { todos: action.todos });
    case types.REMOVE_TODO:
    break;

    default: return state;
  }
};


export default todoReducer;
