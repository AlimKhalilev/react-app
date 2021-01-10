const ADD_POST = "ADD-POST"
const CHANGE_POST_TEXT = "CHANGE-POST-TEXT"
const ADD_MESSAGE = "ADD-MESSAGE"
const CHANGE_MESSAGE_TEXT = "CHANGE-MESSAGE-TEXT"

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
            newDialogMessage: "xoba"
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
        if (action.type === ADD_POST) {
            let newPost = {
                id: Date.now(),
                message: this._state.profilePage.newPostText,
                likes: 0
            };
            this._state.profilePage.postData.push(newPost)
            this._state.profilePage.newPostText = "";
        }
        else if (action.type === CHANGE_POST_TEXT) {
            this._state.profilePage.newPostText = action.text;
        }
        else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: Date.now(), 
                name: "Alim", 
                message: this._state.dialogsPage.newDialogMessage
            }
            this._state.dialogsPage.dialogMessages.push(newMessage);
            this._state.dialogsPage.newDialogMessage = "";
        }
        else if (action.type === CHANGE_MESSAGE_TEXT) {
            this._state.dialogsPage.newDialogMessage = action.text;
        }
        this._rerenderDOM(this._state);
    },
    subscribe: function(observer) { // observer - наблюдатель, подписка на изменение rerenderDOM
        this._rerenderDOM = observer;
    },
    getState: function() {
        return this._state
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const changePostTextActionCreator = (text) => {
    return {
        type: CHANGE_POST_TEXT,
        text: text
    }
}

export const addMessageActionCreator = (text) => {
    return {
        type: ADD_MESSAGE,
        text: text
    }
}

export const changeMessageActionCreator = (text) => {
    return {
        type: CHANGE_MESSAGE_TEXT,
        text: text
    }
}

window.store = store; // ДЛЯ ДЕБАГА И КОНТРОЛЯ ЧЕРЕЗ КОНСОЛЬ STATE

export default store;
