import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { getUserProfileInfo, getUserStatus, updateUserStatus } from "../../../redux/profileReducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import ProfileInfo from "./ProfileInfoClass";

const mapStateToProps = (state) => {
    return {
        profileInfo: state.profilePage.profileInfo,
        status: state.profilePage.status
    }
}

const mapDispatchToProps = {
    getUserProfileInfo,
    getUserStatus,
    updateUserStatus
}

export default compose( // функция которая является конвеером (передает поочередно HOC снизу вверх (сначала withAuthRedirect -> withRouter -> connect))
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfileInfo)

// const ProfileInfoRedirect = withAuthRedirect(ProfileInfo); // HOC для проверки авторизации

// const ProfileInfoWithRouter = withRouter(ProfileInfoRedirect); // HOC добавление withRouter для получения инфы из адресной строки

// const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfoWithRouter); // HOC добавления инфы State и Dispatch

//export default ProfileInfoContainer;