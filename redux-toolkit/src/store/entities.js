import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import bugReducer from "./bugs";

const entitiesReducer = combineReducers({
    bugs: bugReducer,
    counter: counterReducer
});

export default entitiesReducer;