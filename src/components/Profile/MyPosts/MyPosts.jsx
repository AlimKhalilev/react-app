import React from "react";
import AddPost from "./AddPost/AddPost";
import Post from "./Post/Post";
import "./MyPosts.scss";

const MyPosts = (props) => {
    console.log(props);

    let postDataComponents = props.postData.map(e => <Post key={e.id} message={e.message} likes={e.likes}/>)

    let textareaInfo = React.createRef();

    return (
        <div className="addPost">
            <AddPost newPostText={props.newPostText} onPostChange={props.onPostChange} onAddPost={props.onAddPost} textareaInfo={textareaInfo}/>
            <div className="posts">
                {postDataComponents}
            </div>
        </div>
    );
};

export default MyPosts;
// КОНТЕЙНЕРНАЯ КОМПОНЕНТА
