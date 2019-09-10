import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../redux/Reducers";

export default () => {
  const store = createStore(reducers, {}, applyMiddleware(thunk));
  return store;
};
