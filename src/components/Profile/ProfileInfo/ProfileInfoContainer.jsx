import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getUserProfileInfo } from "../../../redux/profileReducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import ProfileInfo from "./ProfileInfoClass";

const mapStateToProps = (state) => {
    return {
        profileInfo: state.profilePage.profileInfo
    }
}

const mapDispatchToProps = {
    getUserProfileInfo
}

const ProfileInfoRedirect = withAuthRedirect(ProfileInfo); // HOC для проверки авторизации

const ProfileInfoWithRouter = withRouter(ProfileInfoRedirect); // HOC добавление withRouter для получения инфы из адресной строки

const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfoWithRouter); // HOC добавления инфы State и Dispatch

export default ProfileInfoContainer;