const SET_FOLLOW = "SET-FOLLOW"
const SET_USERS = "SET-USERS"

let initialState = {
    usersData: []
}

export const usersReducer = (state = initialState, action) => {
    let stateCopy = {...state}; // инициализация копии для state, юзаем spread для развертки state в stateCopy
    switch (action.type) {
        case SET_FOLLOW:
            let usersData = stateCopy.usersData.map(obj => {
                if (obj.id === action.id) {
                    obj.isFollow = !obj.isFollow;
                }
                return obj;
            });
            stateCopy.usersData = [...usersData];
            break;
        case SET_USERS:
            stateCopy = {usersData: [...action.users]};
            break;
        default:
            break;
    }
    return stateCopy;
}

export const changeFollowActionCreator = (id) => {
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
export default usersReducer;