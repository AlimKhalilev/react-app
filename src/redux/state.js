import { rerenderDOM } from "../render"

let state = {
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
        ]
    },
    aside: {
        friends: [
            { id: 1, name: "Alim" },
            { id: 2, name: "Sasha" },
            { id: 3, name: "Khaibulla" },
            { id: 4, name: "Edem" }
        ]
    }
}

window.state = state; // ДЛЯ ДЕБАГА И КОНТРОЛЯ ЧЕРЕЗ КОНСОЛЬ STATE

export let methods = { // методы управления state
    profilePage: { // методы для каждой страницы
        addPost: () => {
            let newPost = {
                id: 5,
                message: state.profilePage.newPostText,
                likes: 0
            };
            state.profilePage.postData.push(newPost)
            state.profilePage.newPostText = "";
            rerenderDOM(state, methods);
        },
        changePostText: (text) => {
            state.profilePage.newPostText = text;
            rerenderDOM(state, methods);
        }
    },
}

export default state;
