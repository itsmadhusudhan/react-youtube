import { applyMiddleware, combineReducers, createStore } from "redux";
import { apiMiddleware } from "../middleware/apiMiddleware";
import searchReducer from "../reducers/searchReducer";

export default () => {
  const store = createStore(
    combineReducers({search:searchReducer }),
    applyMiddleware(apiMiddleware)
  );
  return store;
};
