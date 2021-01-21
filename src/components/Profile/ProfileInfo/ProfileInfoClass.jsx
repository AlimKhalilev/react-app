import React from "react"
import Preloader from "../../Common/Preloader/Preloader";
import { usersAPI } from "../../../api/api";

class ProfileInfoClass extends React.Component {
    componentDidMount() { // когда компонента смонтирована
        //console.log("props DID: ", this.props);
        this.props.setProfileInfo(null); // очищаем данные профиля пользователя
        let profileID = this.props.match.params.userID || 1; // если ID нет (underfined), показываем 1 id

        //console.log(profileID)

        usersAPI.getUserProfile(profileID) // загружаем данные с API в процессе конструктора класса (один раз)
        .then(response => {
            this.props.setProfileInfo(response.data);
        });

        //console.log("Получили данные с API")
    }

    render() {
        return (
            this.props.profileInfo === null ? <Preloader/> : <ProfileInfo {...this.props.profileInfo}/>
        )
    }
}

const ProfileInfo = (props) => {
    console.log(props)
    return (
        <div>
            Profile id: {props.userId} <br></br>
            Name: {props.fullName} <br></br>
            Image: <img src={props.photos.small} alt="UserPhoto"/>
        </div>
    )
}

export default ProfileInfoClass;