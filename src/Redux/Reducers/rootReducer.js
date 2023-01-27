import { combineReducers } from "redux";
import adminReducer from "./adminReducer";
import schoolReducer from "./schoolReducer";
import studentReducer from "./studentReducer";

const rootReducer = combineReducers({
    admin: adminReducer,
    student: studentReducer,
    school : schoolReducer
  })
export default rootReducer