import { getAuth } from "./authReducer";

const SET_INITIALIZED_SUCCESS = "SET-INITIALIZED"

let initialState = {
    isInitialize: false
}

const appReducer = (state = initialState, action) => {
    let stateCopy = {...state}; // инициализация копии для state, юзаем spread для развертки state в stateCopy
    switch (action.type) {
        case SET_INITIALIZED_SUCCESS:
            stateCopy = {...action};
            stateCopy.isInitialize = action.isInitialize;
            break;
        default:
            break;
    }
    return stateCopy;
}

export const setInitialize = () => {
    return {
        type: SET_INITIALIZED_SUCCESS,
        isInitialize: true
    }
}

export const initializeApp = () => { // проверка на авторизацию
    return (dispatch) => {
        dispatch(getAuth()).then(() => { // возвращаем promise из getAuth thunk (по окончанию запроса изменяем initialize)
            dispatch(setInitialize());
            console.log("Изменили render!");
        })
    }
}

export default appReducer;