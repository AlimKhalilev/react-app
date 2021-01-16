import { connect } from "react-redux";
import { changeFollow, setCurrentPage, setFetchingComplete, setPageSize, setTotalUserCount, setUsers } from "../../redux/usersReducer";
import Users from "./UsersClass";

const mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

const mapDispatchToPropsObject = { // передаем просто объект с методами из Reducer
    changeFollow,
    setUsers,
    setPageSize,
    setTotalUserCount,
    setCurrentPage,
    setFetchingComplete
}

const UsersContainer = connect(mapStateToProps, mapDispatchToPropsObject)(Users);

export default UsersContainer;

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