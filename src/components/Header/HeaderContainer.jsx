import { connect } from "react-redux";
import { LogoutUser } from "../../redux/authReducer";
import Header from "./HeaderClass";

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToPropsObject = { // передаем просто объект с методами из Reducer
    LogoutUser
}


const HeaderContainer = connect(mapStateToProps, mapDispatchToPropsObject)(Header);

export default HeaderContainer;