import React from "react"
import Preloader from "../../Common/Preloader/Preloader";

class ProfileInfoClass extends React.Component {
    componentDidMount() { // когда компонента смонтирована
        //console.log("props DID: ", this.props);

        let profileID = this.props.match.params.userID || 2; // если ID нет (underfined), показываем 2 id
        this.props.getUserProfileInfo(profileID);

        //console.log("Получили данные с API")
    }

    render() {
        //console.log(this.props)
        return this.props.profileInfo === null ? <Preloader/> : <ProfileInfo {...this.props.profileInfo}/>
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