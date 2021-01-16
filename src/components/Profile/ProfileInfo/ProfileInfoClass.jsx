import React from "react"
import * as axios from "axios"
import Preloader from "../../Common/Preloader/Preloader";

class ProfileInfoClass extends React.Component {
    componentDidMount() { // когда компонента смонтирована
        //console.log("props DID: ", this.props);
        this.props.setProfileInfo(null); // очищаем данные профиля пользователя
        let profileID = this.props.match.params.userID || 1; // если ID нет (underfined), показываем 1 id

        //console.log(profileID)

        axios.get("https://files.thechampguess.ru/samuraiJS/profileInfo.php?id=" + profileID) // загружаем данные с API в процессе конструктора класса (один раз)
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
    return (
        <div>
            Profile id: {props.id} <br></br>
            Name: {props.name} <br></br>
            Status: {props.status} <br></br>
        </div>
    )
}

export default ProfileInfoClass;