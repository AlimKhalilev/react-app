import AddPost from "./AddPost/AddPost";
import Post from "./Post/Post";
import "./MyPosts.scss";

const MyPosts = (props) => {

    let postDataComponents = props.postData.map(e => <Post key={e.id} message={e.message} likes={e.likes}/>)

    return (
        <div className="addPost">
            <AddPost {...props}/>
            <div className="posts">
                {postDataComponents}
            </div>
        </div>
    );
};

export default MyPosts;
// КОНТЕЙНЕРНАЯ КОМПОНЕНТА
