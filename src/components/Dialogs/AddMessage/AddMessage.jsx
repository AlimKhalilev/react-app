import React from "react";
import { addMessageActionCreator, changeMessageActionCreator } from "../../../redux/dialogsReducer";
import "./AddMessage.scss"

const AddMessage = (props) => {
    let messageInfo = React.createRef();

    let buttonClick = () => {
        props.dispatch(addMessageActionCreator());
        //console.log("hello");
    }

    let onMessageChange = () => {
        props.dispatch(changeMessageActionCreator(messageInfo.current.value));
        //console.log(messageInfo.current.value);
    }

    return (
        <div className="dialog-content-messages-add">
            <textarea cols="30" rows="2" ref={messageInfo} value={props.message} onChange={onMessageChange}></textarea>
            <button className="button_primary" onClick={buttonClick}>Add</button>
        </div>
    )
}

export default AddMessage;