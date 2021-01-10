import AddPost from "./AddPost/AddPost";
import "./MyPosts.scss";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postDataComponents = props.data.postData.map(e => <Post key={e.id} message={e.message} likes={e.likes}/>)

    return (
        <div className="addPost">
            <AddPost dispatch={props.dispatch} newPostText={props.data.newPostText}/>
            <div className="posts">
                {postDataComponents}
            </div>
        </div>
    );
};

export default MyPosts;
