import { applyMiddleware, combineReducers, createStore } from "redux";
import asideReducer from "./asideReducer";
import authReducer from "./authReducer";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from "redux-form";
import appReducer from "./appReducer";

let reducers = combineReducers({ // сюда передаем объекты из _state (точнее их ключи, а значение это reducer для ключа)
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    aside: asideReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store; // ДЛЯ ДЕБАГА И КОНТРОЛЯ ЧЕРЕЗ КОНСОЛЬ STATE

export default store;