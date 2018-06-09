import { combineReducers } from "redux";

import * as reducers from "./ducks"; // import all reducers from ducks/index.js

const rootReducer = combineReducers(reducers);

export default rootReducer;
