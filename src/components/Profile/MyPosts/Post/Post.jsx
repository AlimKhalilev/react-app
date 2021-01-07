import "./Post.scss";
import ava from "./ava.jpg";
import like from "../../../../assets/heart.svg";

const Post = (props) => {
    return (
        <div className="post">
            <img className="post-img" src={ava} alt="avatar" />
            <span>{props.message}</span>
            <div className="post-like">
                <img src={like} alt="Like"/>
                <span>{props.likes}</span>
            </div>
        </div>
    );
};

export default Post;
