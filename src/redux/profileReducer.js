const ADD_POST = "ADD-POST"
const CHANGE_POST_TEXT = "CHANGE-POST-TEXT"

let initialState = {
    postData: [
        { id: 0, message: "Здарова всем пацаны, как дела??", likes: 12 },
        { id: 1, message: "Это конечно не Самара, и не Пермь..", likes: 2 },
        { id: 2, message: "Але че куда", likes: 1 }
    ],
    newPostText: ""
}

const profileReducer = (state = initialState, action) => {
    let stateCopy = {...state}; // инициализация копии для state, юзаем spread для развертки state в stateCopy
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: Date.now(),
                message: state.newPostText,
                likes: 0
            };
            stateCopy.postData = [...state.postData] // развертка массива
            stateCopy.postData.push(newPost)
            stateCopy.newPostText = "";
            break;
        case CHANGE_POST_TEXT:
            stateCopy.newPostText = action.text;
            break;
        default:
            break;
    }
    return stateCopy;
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

export default profileReducer;