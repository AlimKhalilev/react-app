import React from "react";
import { addPostActionCreator, changePostTextActionCreator } from "../../../../redux/profileReducer";
import "./AddPost.scss"

const AddPost = (props) => {

    let textareaInfo = React.createRef();

    let buttonClick = () => {
        props.dispatch(addPostActionCreator());
        //console.log();
    }

    let onPostChange = () => {
        props.dispatch(changePostTextActionCreator(textareaInfo.current.value));
        //console.log(textareaInfo.current.value);
    }

    return (
        <div className="addPost-content">
            <h2>Add post</h2>
            <textarea name="" id="" cols="30" rows="10" ref={textareaInfo} value={props.newPostText} onChange={onPostChange}></textarea>
            <div className="addPost-button">
                <button className="button_primary" onClick={buttonClick}>Add</button>
            </div>
        </div>
    );
};

export default AddPost;