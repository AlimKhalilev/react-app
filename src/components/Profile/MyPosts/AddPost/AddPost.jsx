import "./AddPost.scss"

const AddPost = (props) => {
    return (
        <div className="addPost-content">
            <h2>Add post</h2>
            <textarea cols="30" rows="10" value={props.newPostText} onChange={props.onPostChange}></textarea>
            <div className="addPost-button">
                <button className="button_primary" onClick={props.onAddPost}>Add</button>
            </div>
        </div>
    );
};

export default AddPost;
// ПРЕЗЕНТАЦИОННАЯ КОМПОНЕНТА