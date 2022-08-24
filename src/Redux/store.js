import {  combineReducers, compose, legacy_createStore, applyMiddleware } from "redux";
import { reducer } from "../Redux/Auth/reducer";

import thunk from "redux-thunk";
const rootReducer = combineReducers({
  auth: reducer,
});


const composeEnhancers = (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
export const store = legacy_createStore(rootReducer
  , composeEnhancers(
  applyMiddleware(thunk))
  );