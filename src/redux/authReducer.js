import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

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
            break;
        default:
            break;
    }
    return stateCopy;
}

export const setUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        data: {userId, email, login, isAuth}
    }
}

export const getAuth = () => { // проверка на авторизацию
    return (dispatch) => {
        return authAPI.getAuth().then(response => {
            if (response.data.resultCode === 0) { // нет ошибок в запросе, пользователь авторизирован
                let myData = response.data.data;
                dispatch(setUserData(myData.id, myData.email, myData.login, true));
            }
        });
    }
}

export const LoginUser = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.setLogIn(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) { // нет ошибок в запросе, успешная авторизация
                //dispatch(setUserData(email, password, rememberMe, true));
                dispatch(getAuth());
            }
            else {
                dispatch(stopSubmit("login", {_error: response.data.messages[0]}));
            }
        })
    }
}

export const LogoutUser = () => {
    return (dispatch) => {
        authAPI.setLogOut().then(response => {
            if (response.data.resultCode === 0) { // нет ошибок в запросе, вылогинились
                dispatch(setUserData(null, null, null, false));
            }
        })
    }
}

export default authReducer;