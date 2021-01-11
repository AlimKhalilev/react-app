import React from "react";
import { addPostActionCreator, changePostTextActionCreator } from "../../../redux/profileReducer";
import AddPost from "./AddPost/AddPost";
import "./MyPosts.scss";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postDataComponents = props.data.postData.map(e => <Post key={e.id} message={e.message} likes={e.likes}/>)

    let textareaInfo = React.createRef();

    let onAddPost = () => {
        props.dispatch(addPostActionCreator());
        //console.log();
    }

    let onPostChange = () => {
        props.dispatch(changePostTextActionCreator(textareaInfo.current.value));
        //console.log(textareaInfo.current.value);
    }

    return (
        <div className="addPost">
            <AddPost newPostText={props.data.newPostText} onPostChange={onPostChange} onAddPost={onAddPost} textareaInfo={textareaInfo}/>
            <div className="posts">
                {postDataComponents}
            </div>
        </div>
    );
};

export default MyPosts;
// КОНТЕЙНЕРНАЯ КОМПОНЕНТА
