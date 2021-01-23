import { addNewPost } from "../../../redux/profileReducer";
import { connect } from "react-redux";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
    //console.log(state)
    return {
        postData: state.profilePage.postData
    }
}

const mapDispatchToProps = {
    addNewPost
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onAddPost: () => {
//             //console.log("xoba");
//             dispatch(addPostActionCreator());
//             //console.log();
//         },
//         onPostChange: (text) => {
//             dispatch(changePostTextActionCreator(text));
//             //console.log(textareaInfo.current.value);
//         }
//     }
// }

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;