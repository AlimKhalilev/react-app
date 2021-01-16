import { connect } from "react-redux";
import { changeFollowActionCreator, setCurrentPage, setFetchingComplete, setPageSize, setTotalUserCount, setUsers } from "../../redux/usersReducer";
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

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeFollow: (id) => {
            dispatch(changeFollowActionCreator(id));
        },
        setUsersLocal: (users) => {
            dispatch(setUsers(users));
        },
        setPageSizeLocal: (size) => {
            dispatch(setPageSize(size));
        },
        setTotalUserCountLocal: (count) => {
            dispatch(setTotalUserCount(count));
        },
        setCurrentPageLocal: (page) => {
            dispatch(setCurrentPage(page));
        },
        setFetchingCompleteLocal: (fetching) => {
            dispatch(setFetchingComplete(fetching));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;