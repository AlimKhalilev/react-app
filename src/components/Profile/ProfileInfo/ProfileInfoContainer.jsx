import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setProfileInfo } from "../../../redux/profileReducer";
import ProfileInfo from "./ProfileInfoClass";

const mapStateToProps = (state) => {
    return {
        profileInfo: state.profilePage.profileInfo
    }
}

const mapDispatchToProps = {
    setProfileInfo
}

const ProfileInfoWithRouter = withRouter(ProfileInfo); // добавление withRouter для получения инфы из адресной строки

const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfoWithRouter);

export default ProfileInfoContainer;