import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';


import rootReducer from './rootReducer';


/* eslint-disable no-underscore-dangle */
export default function configureStore(initialState = {}) {
  return createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  );
}
