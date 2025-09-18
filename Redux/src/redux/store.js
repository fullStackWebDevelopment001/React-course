
import { legacy_createStore } from "redux";
import { reducerFunction } from "./reducer";

 const initialState={
    counter:10,
    todo:[]
 }

export const store = legacy_createStore(reducerFunction, initialState)

//useReducer(function, initial)

