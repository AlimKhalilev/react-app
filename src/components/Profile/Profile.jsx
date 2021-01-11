import "./Profile.scss";
import banner from "./banner.png";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <img className="main-content-profile-img" src={banner} alt="banner"/>
            <MyPostsContainer/>
        </div>
    )
};

export default Profile;