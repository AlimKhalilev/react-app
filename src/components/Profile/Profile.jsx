import "./Profile.scss";
import banner from "./banner.png";
import MyPosts from "../MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <img className="main-content-profile-img" src={banner} alt="banner"/>
            <MyPosts/>
        </div>
    )
};

export default Profile;