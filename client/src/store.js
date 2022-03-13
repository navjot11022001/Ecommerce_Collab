import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import cartReducer from "./components/reducers/cartReducer";
import UserReducer from "./components/reducers/UserReducer";
import productReducer from "./components/reducers/productReducer";

const reducer = combineReducers({
  cartReducer,
  UserReducer,
  productReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
