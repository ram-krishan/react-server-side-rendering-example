import * as types from './types';

const addUser = user => (
  {
    type: types.ADD_USER,
    user,
  }
);


const removeUser = user => (
  {
    type: types.REMOVE_USER,
    user,
  }
);

export {
  addUser,
  removeUser,
};
