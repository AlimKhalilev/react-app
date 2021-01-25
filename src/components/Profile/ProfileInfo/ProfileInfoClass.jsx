import React from "react"
import Preloader from "../../Common/Preloader/Preloader";
import "./ProfileInfo.scss"
import ProfileInfoStatusHooks from "./ProfileInfoStatusHooks";

class ProfileInfoClass extends React.Component {
    componentDidMount() { // когда компонента смонтирована
        //console.log("props DID: ", this.props);

        let profileID = this.props.match.params.userID; // если ID нет (undefined), показываем 14231 id (наш id)
        if (!profileID) { // если в адр строке нет id пользователя, даем id из state
            profileID = this.props.userId; // но если в state нет id (не авторизованы)
            if (!profileID) {
                this.props.history.push("/login"); // кидаем пользователя на авторизацию
            }
        }
        this.props.getUserProfileInfo(profileID);
        this.props.getUserStatus(profileID);

        //console.log("Получили данные с API")
    }

    render() {
        //console.log(this.props)
        return this.props.profileInfo === null 
        ? 
        <Preloader/> 
        : 
        <ProfileInfo {...this.props.profileInfo} status={this.props.status} updateStatus={this.props.updateUserStatus}/>
    }
}

const ProfileInfo = (props) => {
    //console.log(props)
    return (
        <div className="profileInfo">
            <ul className="profileInfo-content">
                <li>Profile id: {props.userId}</li>
                <li>Name: {props.fullName}</li>
                <li>Image: <img src={props.photos.small} alt="UserPhoto"/></li>
                <li>Profile id: {props.userId}</li>
            </ul>
            <ProfileInfoStatusHooks {...props}/>
        </div>
    )
}

export default ProfileInfoClass;