import { Field, reduxForm } from "redux-form"
import { maxLengthFieldCreator, requiredField } from "../../../formsValidator/validate";
import { Element } from "../../Common/formControls/formControls";
import "./AddMessage.scss"

let validateLength10 = maxLengthFieldCreator(10); // инициализация валидатора для 10 символов
let Textarea = Element("textarea"); // через HOC создаем свой textarea

const AddMessage = (props) => {
    const onSubmitMessage = (formData) => {
        console.log(formData.message);
        props.addMessage(formData.message)
    }

    return (
        <AddMessageFormRedux onSubmit={onSubmitMessage}/>
    )
}

const AddMessageForm = (props) => {
    return (
        <form className="dialog-content-messages-add" onSubmit={props.handleSubmit}>
            <Field validate={[requiredField, validateLength10]} component={Textarea} name={"message"} cols="30" rows="2"/>
            <button className="button_primary">Add</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({ // инициализация формы для reduxForm
    form: "addMessage"
})(AddMessageForm)

export default AddMessage;