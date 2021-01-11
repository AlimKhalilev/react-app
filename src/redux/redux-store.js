import { combineReducers, createStore } from "redux";
import asideReducer from "./asideReducer";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

let reducers = combineReducers({ // сюда передаем объекты из _state (точнее их ключи, а значение это reducer для ключа)
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    aside: asideReducer
});

let store = createStore(reducers);

window.store = store; // ДЛЯ ДЕБАГА И КОНТРОЛЯ ЧЕРЕЗ КОНСОЛЬ STATE

export default store;