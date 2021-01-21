import { usersAPI } from "../api/api"

const SET_FOLLOW = "SET-FOLLOW"
const SET_USERS = "SET-USERS"
const SET_PAGE_SIZE = "SET-PAGE-SIZE"
const SET_TOTAL_USER_COUNT = "SET-TOTAL-USER-COUNT"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_FETCHING_COMPLETE = "SET-FETCHING-COMPLETE"
const CHANGE_FOLLOW_DISABLED_INFO = "CHANGE-FOLLOW-DISABLED-INFO"

let initialState = {
    usersData: [],
    pageSize: 40, // количество элементов на странице (пока не меняется)
    totalUserCount: 0, // количество пользователей всего в бд (приходит с API)
    currentPage: 1, // текущая страница (изначально 1, потом меняется через клик на кнопку pagination),
    isFetching: true, // происходит ли процесс загрузки,
    followDisabledInfo: [] // массив id, на которых мы сейчас нажали 
}

export const usersReducer = (state = initialState, action) => {
    let stateCopy = {...state}; // инициализация копии для state, юзаем spread для развертки state в stateCopy
    switch (action.type) {
        case SET_FOLLOW:
            let usersData = stateCopy.usersData.map(obj => {
                if (obj.id === action.id) {
                    obj.followed = !obj.followed;
                }
                return obj;
            });
            stateCopy.usersData = [...usersData];
            break;
        case SET_USERS:
            stateCopy.usersData = [...action.users];
            break;
        case SET_PAGE_SIZE:
            stateCopy.pageSize = action.size;
            break;
        case SET_TOTAL_USER_COUNT:
            stateCopy.totalUserCount = action.count;
            break;
        case SET_CURRENT_PAGE:
            stateCopy.currentPage = action.page;
            break;
        case SET_FETCHING_COMPLETE:
            stateCopy.isFetching = action.fetching;
            break;
        case CHANGE_FOLLOW_DISABLED_INFO:
            stateCopy.followDisabledInfo = [...state.followDisabledInfo];
            let searchIndex = stateCopy.followDisabledInfo.indexOf(action.id);
            if (searchIndex > -1) {// если нашли в массиве элемент который уже disabled
                stateCopy.followDisabledInfo.splice(searchIndex, 1); // удаляем этот элемент
            }
            else {
                stateCopy.followDisabledInfo.push(action.id);
            }
            break;
        default:
            break;
    }
    return stateCopy;
}

export const changeFollow = (id) => {
    return {
        type: SET_FOLLOW,
        id: id
    }
}

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}

export const setPageSize = (size) => {
    return {
        type: SET_PAGE_SIZE,
        size: size
    }
}

export const setTotalUserCount = (count) => {
    return {
        type: SET_TOTAL_USER_COUNT,
        count: count
    }
}

export const setCurrentPage = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        page: page
    }
}

export const setFetchingComplete = (fetching) => {
    return {
        type: SET_FETCHING_COMPLETE,
        fetching: fetching
    }
}

export const changeFollowDisabledInfo = (id) => {
    return {
        type: CHANGE_FOLLOW_DISABLED_INFO,
        id: id
    }
}

// THUNK LEVEL

export const getUsersThunkCreator = (currentPage, pageSize) => { // замыкание
    return (dispatch) => {
    
        dispatch(setFetchingComplete(true)); // ставим загрузку страницы на true (еще грузится)

        usersAPI.getUsers(currentPage, pageSize).then(response => {
            dispatch(setUsers(response.data.items));
            dispatch(setTotalUserCount(response.data.totalCount));
            dispatch(setFetchingComplete(false)); // ставим на загрузку страницы false (загрузили)
            //console.log(response.data);
        });
    }
}

export const followUserThunkCreator = (id) => { // замыкание
    return (dispatch) => {
    
        dispatch(changeFollowDisabledInfo(id)); // ставим загрузку страницы на true (еще грузится)

        usersAPI.followToUser(id).then(response => {
            if (response.data.resultCode === 0) { // если все прошло успешно
                dispatch(changeFollow(id));
                dispatch(changeFollowDisabledInfo(id));
            }
        });
    }
}

export const unfollowUserThunkCreator = (id) => { // замыкание
    return (dispatch) => {
    
        dispatch(changeFollowDisabledInfo(id)); // ставим загрузку страницы на true (еще грузится)

        usersAPI.unfollowToUser(id).then(response => {
            if (response.data.resultCode === 0) { // если все прошло успешно
                dispatch(changeFollow(id));
                dispatch(changeFollowDisabledInfo(id));
            }
        });

        // setTimeout(() => {
        //     dispatch(changeFollow(id));
        //     dispatch(changeFollowDisabledInfo(id));
        // }, 1200)
    }
}

export default usersReducer;