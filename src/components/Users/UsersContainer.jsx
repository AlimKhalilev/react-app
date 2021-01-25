import { connect } from "react-redux";
import { compose } from "redux";
import { changeFollow, changeFollowDisabledInfo, followUserThunkCreator, getUsersThunkCreator, setCurrentPage, setFetchingComplete, setPageSize, setTotalUserCount, setUsers, unfollowUserThunkCreator } from "../../redux/usersReducer";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { pageSizeSelector, totalUserCountSelector, usersDataSelectorSuper } from "../../redux/usersSelector"
import Users from "./UsersClass";

const mapStateToProps = (state) => {
    return {
        usersData: usersDataSelectorSuper(state),
        pageSize: pageSizeSelector(state),
        totalUserCount: totalUserCountSelector(state),
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followDisabledInfo: state.usersPage.followDisabledInfo
    }
}

const mapDispatchToPropsObject = { // передаем просто объект с методами из Reducer
    changeFollow,
    setUsers,
    setPageSize,
    setTotalUserCount,
    setCurrentPage,
    setFetchingComplete,
    changeFollowDisabledInfo,
    getUsersThunkCreator,
    followUserThunkCreator,
    unfollowUserThunkCreator
}

export default compose(
    connect(mapStateToProps, mapDispatchToPropsObject),
    withAuthRedirect
)(Users);

// const UsersInfoRedirect = withAuthRedirect(Users); // HOC для проверки авторизации

// const UsersContainer = connect(mapStateToProps, mapDispatchToPropsObject)(UsersInfoRedirect);

// export default UsersContainer;

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onChangeFollow: (id) => {
//             dispatch(changeFollow(id));
//         },
//         setUsers: (users) => {
//             dispatch(setUsers(users));
//         },
//         setPageSize: (size) => {
//             dispatch(setPageSize(size));
//         },
//         setTotalUserCount: (count) => {
//             dispatch(setTotalUserCount(count));
//         },
//         setCurrentPage: (page) => {
//             dispatch(setCurrentPage(page));
//         },
//         setFetchingComplete: (fetching) => {
//             dispatch(setFetchingComplete(fetching));
//         }
//     }
// }