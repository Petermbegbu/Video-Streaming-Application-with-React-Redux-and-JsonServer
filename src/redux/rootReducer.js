import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./reducers/authReducer";
import streamReducer from "./reducers/streamReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    form: formReducer,
    streams: streamReducer
})

export default rootReducer; 