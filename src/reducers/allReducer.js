import { combineReducers } from "redux";

import shoppingReducer from "./shoppingReducer.js";
import userReducer from "./userReducer.js";
import visualReducer from "./visualReducer.js";

const allReducer = combineReducers({
  userReducer,
  shoppingReducer,
  visualReducer,
});
export default allReducer;
