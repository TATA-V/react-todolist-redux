import { legacy_createStore as createStore, combineReducers } from "redux";
import { todoReducer } from "../Reducers";

const rootReducers = combineReducers({ todoReducer });

const store = createStore(rootReducers);

export default store;
