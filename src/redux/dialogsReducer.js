const ADD_MESSAGE = "ADD-MESSAGE"
const CHANGE_MESSAGE_TEXT = "CHANGE-MESSAGE-TEXT"

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: Date.now(), 
                name: "Alim", 
                message: state.newDialogMessage
            }
            state.dialogMessages.push(newMessage);
            state.newDialogMessage = "";
            break;
        case CHANGE_MESSAGE_TEXT:
            state.newDialogMessage = action.text;
            break;
        default:
            break;
    }
    return state;
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

export default dialogsReducer;