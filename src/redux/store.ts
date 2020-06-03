import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers";

let store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware // 允许 dispatch() 函数
  )
);
export default store