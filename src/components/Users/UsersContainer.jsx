import { connect } from "react-redux";
import { changeFollowActionCreator, setCurrentPage, setPageSize, setTotalUserCount, setUsers } from "../../redux/usersReducer";
import Users from "./UsersClass";

const mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeFollow: (id) => {
            console.log(id)
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
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;