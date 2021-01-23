import { Field, reduxForm } from "redux-form";
import { maxLengthFieldCreator, requiredField } from "../../../../formsValidator/validate";
import { Element } from "../../../Common/formControls/formControls";
import "./AddPost.scss"

let validateLength10 = maxLengthFieldCreator(10); // инициализация валидатора для 10 символов
let Textarea = Element("textarea"); // через HOC создаем свой textarea

const AddPost = (props) => {
    const submitPostForm = (formData) => {
        props.addNewPost(formData.commentText);
        console.log(formData, props);
    }

    return (
        <AddPostFormRedux onSubmit={submitPostForm}/>
    );
};

const AddPostForm = (props) => { // в validete передаются все валидаторы, которые нужны
    return (
        <form className="addPost-content" onSubmit={props.handleSubmit}>
            <h2>Add post</h2>
            <Field validate={[requiredField, validateLength10]} component={Textarea} name={"commentText"} cols="30" rows="10" placeholder="Введите текст поста"/>
            <div className="addPost-button">
                <button className="button_primary">Add</button>
            </div>
        </form>
    );
}

const AddPostFormRedux = reduxForm({ // инициализация формы для reduxForm
    form: "addPost"
})(AddPostForm)

export default AddPost;
// ПРЕЗЕНТАЦИОННАЯ КОМПОНЕНТА