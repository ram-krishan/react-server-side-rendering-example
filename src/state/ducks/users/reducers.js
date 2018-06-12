import * as types from './types';


const initialState = {
  users: [{id: 1, name: 'ram'}, {id: 2, name: 'ram1'}, {id: 3, name: 'ram2'}]
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
