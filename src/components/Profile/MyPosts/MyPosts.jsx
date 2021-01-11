import AddPost from "./AddPost/AddPost";
import Post from "./Post/Post";
import "./MyPosts.scss";

const MyPosts = (props) => {

    let postDataComponents = props.postData.map(e => <Post key={e.id} message={e.message} likes={e.likes}/>)

    const onPostChangeLocal = (e) => {
        props.onPostChange(e.target.value);
    }

    return (
        <div className="addPost">
            <AddPost newPostText={props.newPostText} onPostChange={onPostChangeLocal} onAddPost={props.onAddPost} textareaInfo={props.textareaInfo}/>
            <div className="posts">
                {postDataComponents}
            </div>
        </div>
    );
};

export default MyPosts;
// КОНТЕЙНЕРНАЯ КОМПОНЕНТА
