import "./MyPosts.scss";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postDataComponents = props.postData.map(e => <Post key={e.id} message={e.message} likes={e.likes}/>)

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
                {postDataComponents}
            </div>
        </div>
    );
};

export default MyPosts;
