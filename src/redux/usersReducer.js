const SET_FOLLOW = "SET-FOLLOW"
const SET_USERS = "SET-USERS"
const SET_PAGE_SIZE = "SET-PAGE-SIZE"
const SET_TOTAL_USER_COUNT = "SET-TOTAL-USER-COUNT"
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"
const SET_FETCHING_COMPLETE = "SET-FETCHING-COMPLETE"

let initialState = {
    usersData: [],
    pageSize: 40, // количество элементов на странице (пока не меняется)
    totalUserCount: 0, // количество пользователей всего в бд (приходит с API)
    currentPage: 1, // текущая страница (изначально 1, потом меняется через клик на кнопку pagination),
    isFetching: true // происходит ли процесс загрузки 
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

export default usersReducer;