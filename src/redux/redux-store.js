import { combineReducers, createStore } from "redux";
import asideReducer from "./asideReducer";
import authReducer from "./authReducer";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";


let reducers = combineReducers({ // сюда передаем объекты из _state (точнее их ключи, а значение это reducer для ключа)
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    aside: asideReducer,
    auth: authReducer
});

let store = createStore(reducers);

window.store = store; // ДЛЯ ДЕБАГА И КОНТРОЛЯ ЧЕРЕЗ КОНСОЛЬ STATE

export default store;