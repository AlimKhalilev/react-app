import "./Dialogs.scss";
import ava from "./ava.jpg";
import { NavLink } from "react-router-dom";
import AddMessage from "./AddMessage/AddMessage";
import React from "react";
import { addMessageActionCreator, changeMessageActionCreator } from "../../redux/dialogsReducer";

const DialogPerson = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <li className="dialog-content-persons-list-item">
            <NavLink to={path}>{props.name}</NavLink>
        </li>
    );
};

const DialogMessage = (props) => {
    return (
        <div className="dialog-content-messages-item">
            <div className="dialog-content-messages-item-author">
                <img src={ava} alt="Avatar" />
                <span>{props.name}</span>
            </div>
            <div className="dialog-content-messages-item-text">
                <span>{props.message}</span>
            </div>
        </div>
    );
};

const Dialogs = (props) => {

    let dialogPersonsComponents = props.data.dialogPersons.map(e => <DialogPerson name={e.name} id={e.id} key={e.id} />)
    let dialogMessagesComponent = props.data.dialogMessages.map(e => <DialogMessage key={e.id} name={e.name} message={e.message}/>)

    let messageInfo = React.createRef();

    let onMessageAdd = () => {
        props.dispatch(addMessageActionCreator());
        //console.log("hello");
    }

    let onMessageChange = () => {
        props.dispatch(changeMessageActionCreator(messageInfo.current.value));
        //console.log(messageInfo.current.value);
    }

    return (
        <div className="dialog">
            <h2>Dialogs</h2>
            <div className="dialog-content">
                <div className="dialog-content-persons">
                    <ul className="dialog-content-persons-list">
                        {dialogPersonsComponents}
                    </ul>
                </div>
                <div className="dialog-content-messages">
                    {dialogMessagesComponent}
                    <AddMessage message={props.data.newDialogMessage} messageInfo={messageInfo} onMessageAdd={onMessageAdd} onMessageChange={onMessageChange}/>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
