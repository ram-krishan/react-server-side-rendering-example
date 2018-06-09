import * as types from './types';


const initialState = {
  users: []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // do reducer stuff

    case types.ADD_USER:
    break;

    case types.REMOVE_USER:
    break;

    default: return state;
  }
};


export default userReducer;
