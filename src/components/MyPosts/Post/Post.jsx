import "./Post.scss";
import ava from "./ava.jpg";

const Post = (props) => {
    return (
        <div className="post">
            <img className="post-img" src={ava} alt="avatar" />
            <span>{props.message}</span>
        </div>
    );
};

export default Post;
