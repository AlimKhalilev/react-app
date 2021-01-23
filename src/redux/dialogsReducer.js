const ADD_MESSAGE = "ADD-MESSAGE"

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
    ]
}

const dialogsReducer = (state = initialState, action) => {
    let stateCopy = {...state}; // инициализация копии для state, юзаем spread для развертки state в stateCopy
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: Date.now(), 
                name: "Alim", 
                message: action.text
            }
            stateCopy.dialogMessages = [...state.dialogMessages];
            stateCopy.dialogMessages.push(newMessage);
            stateCopy.newDialogMessage = "";
            break;
        default:
            break;
    }
    return stateCopy;
}

export const addMessageActionCreator = (text) => {
    return {
        type: ADD_MESSAGE,
        text: text
    }
}

// THUNK

export const addDialogMessage = (message) => {
    return (dispatch) => {
        dispatch(addMessageActionCreator(message));
    }
}

export default dialogsReducer;