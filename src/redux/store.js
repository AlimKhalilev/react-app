import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _rerenderDOM: "", // инициализация ререндера нашего приложения
    _state: { // поле тип private (кода есть _)
        profilePage: {
            postData: [
                { id: 0, message: "Здарова всем пацаны, как дела??", likes: 12 },
                { id: 1, message: "Это конечно не Самара, и не Пермь..", likes: 2 },
                { id: 2, message: "Але че куда", likes: 1 }
            ],
            newPostText: ""
        },
        dialogsPage: {
            dialogPersons: [
                { id: 1, name: "Alim" },
                { id: 2, name: "Sasha" },
                { id: 3, name: "Khaibulla" },
                { id: 4, name: "Edem" }
            ],
            dialogMessages: [
                { id: 1, name: "Alim", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, temporibus!" },
                { id: 2, name: "Alim", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, temporibus!" },
                { id: 3, name: "Alim", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, temporibus!" },
                { id: 4, name: "Alim", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, temporibus!" }
            ],
            newDialogMessage: ""
        },
        aside: {
            friends: [
                { id: 1, name: "Alim" },
                { id: 2, name: "Sasha" },
                { id: 3, name: "Khaibulla" },
                { id: 4, name: "Edem" }
            ]
        }
    },
    dispatch: function(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._rerenderDOM(this._state);
    },
    subscribe: function(observer) { // observer - наблюдатель, подписка на изменение rerenderDOM
        this._rerenderDOM = observer;
    },
    getState: function() {
        return this._state
    }
}

//window.store = store; // ДЛЯ ДЕБАГА И КОНТРОЛЯ ЧЕРЕЗ КОНСОЛЬ STATE

export default store;
