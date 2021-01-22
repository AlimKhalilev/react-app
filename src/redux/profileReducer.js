import { profileAPI } from "../api/api"

const ADD_POST = "ADD-POST"
const CHANGE_POST_TEXT = "CHANGE-POST-TEXT"
const SET_PROFILE_INFO = "SET-PROFILE-INFO"
const SET_USER_STATUS = "SET-USER-STATUS"

let initialState = {
    postData: [
        { id: 0, message: "Здарова всем пацаны, как дела??", likes: 12 },
        { id: 1, message: "Это конечно не Самара, и не Пермь..", likes: 2 },
        { id: 2, message: "Але че куда", likes: 1 }
    ],
    newPostText: "",
    profileInfo: null,
    status: ""
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
        case SET_PROFILE_INFO:
            stateCopy.profileInfo = action.info;
            break;
        case SET_USER_STATUS:
            stateCopy.status = action.status;
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

export const setProfileInfo = (info) => {
    return {
        type: SET_PROFILE_INFO,
        info: info
    }
}

export const setUserStatus = (status) => {
    return {
        type: SET_USER_STATUS,
        status: status
    }
}

// THUNK

export const getUserProfileInfo = (id) => {
    return (dispatch) => {
        dispatch(setProfileInfo(null)); // очищаем данные профиля пользователя

        profileAPI.getUserProfile(id) // загружаем данные с API в процессе конструктора класса (один раз)
        .then(response => {
            dispatch(setProfileInfo(response.data));
        });
    }
}

export const getUserStatus = (id) => {
    return (dispatch) => {
        profileAPI.getStatus(id) // загружаем данные с API в процессе конструктора класса (один раз)
        .then(response => {
            dispatch(setUserStatus(response.data));
        });
    }
}

export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.setStatus(status) // загружаем данные с API в процессе конструктора класса (один раз)
        .then(response => {
            if (response.data.resultCode === 0) {
                console.log("updateStatus", response.data, status);
                dispatch(setUserStatus(status));
            }
        });
    }
}

export default profileReducer;