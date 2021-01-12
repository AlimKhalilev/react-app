import { connect } from "react-redux";
import { changeFollowActionCreator, setUsers } from "../../redux/usersReducer";
import Users from "./Users";

const mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData
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
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;