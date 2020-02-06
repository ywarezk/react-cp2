import {combineReducers} from "redux"
import userReducer from "./user.reducer";
import todoReducer from "./todo.reducer";
import settingsReducer from "./settings.reducer";

// masterReducer
export default combineReducers({
    user: userReducer,
    todo: todoReducer,
    settings: settingsReducer
});