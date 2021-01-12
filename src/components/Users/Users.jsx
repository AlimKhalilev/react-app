import ava from "../Profile/MyPosts/Post/ava.jpg"
import "./Users.scss"
import * as axios from "axios"

const Users = (props) => {

    if (props.usersData.length === 0) {
        axios.get("https://files.thechampguess.ru/samuraiJS/users.php")
        .then(response => {
            props.setUsersLocal(response.data);
        });
    }
    
    let myUsers = props.usersData.map(e => <User key={e.id} data={e} followMethod={props.onChangeFollow}/>)

    return (
        <div className="users">
            <h2>Users</h2>
            <div className="users-container">
                {myUsers}
            </div>
        </div>
    )
}

const User = (props) => {

    const onChangeFollowLocal = () => {
        props.followMethod(props.data.id)
    }

    return (
        <div className="users-container-item">
            <div className="users-container-item-data">
                <img src={ava} alt="ava"/>
                <button className="button_primary" onClick={onChangeFollowLocal}>{props.data.isFollow ? "Unfollow" : "Follow"}</button>
            </div>
            <div className="users-container-item-info">
                <div className="users-container-item-info-about">
                    <p>{props.data.name}</p>
                    <p>{props.data.status}</p>
                </div>
                <div className="users-container-item-info-location">
                    <h4>
                        {props.data.location.country}<br/>{props.data.location.city}
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default Users;