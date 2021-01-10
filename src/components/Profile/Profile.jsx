import "./Profile.scss";
import banner from "./banner.png";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return (
        <div>
            <img className="main-content-profile-img" src={banner} alt="banner"/>
            <MyPosts data={props.data} dispatch={props.dispatch}/>
        </div>
    )
};

export default Profile;