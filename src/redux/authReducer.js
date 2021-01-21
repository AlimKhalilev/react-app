import { usersAPI } from "../api/api";

const SET_USER_DATA = "SET-USER-DATA"

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false, // еще не зареган
}

const authReducer = (state = initialState, action) => {
    let stateCopy = {...state}; // инициализация копии для state, юзаем spread для развертки state в stateCopy
    switch (action.type) {
        case SET_USER_DATA:
            stateCopy = {...action.data};
            stateCopy.isAuth = true; // пользователь авторизован
            break;
        default:
            break;
    }
    return stateCopy;
}

export const setUserData = (userId, email, login) => {
    return {
        type: SET_USER_DATA,
        data: {userId, email, login}
    }
}

export const getAuth = () => {
    return (dispatch) => {
        usersAPI.getAuth().then(response => {
            if (response.data.resultCode === 0) { // нет ошибок в запросе, пользователь авторизирован
                let myData = response.data.data;
                dispatch(setUserData(myData.id, myData.email, myData.login));
            }
        });
    }
}

export default authReducer;