import "./MyPosts.scss";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className="addPost">
            <div className="addPost-content">
                <h2>Add post</h2>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <div className="addPost-button">
                    <button className="button_primary">Add</button>
                </div>
            </div>
            <div className="posts">
                <Post message="Здарова всем пацаны, как дела??"/>
                <Post message="Это конечно не Самара, и не Пермь.."/>
            </div>
        </div>
    );
};

export default MyPosts;
