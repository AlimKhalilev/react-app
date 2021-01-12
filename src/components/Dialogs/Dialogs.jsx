import "./Dialogs.scss";
import ava from "./ava.jpg";
import { NavLink } from "react-router-dom";
import AddMessage from "./AddMessage/AddMessage";

const Dialogs = (props) => {

    console.log(props)

    let dialogPersonsComponents = props.dialogPersons.map(e => <DialogPerson name={e.name} id={e.id} key={e.id} />)
    let dialogMessagesComponent = props.dialogMessages.map(e => <DialogMessage key={e.id} name={e.name} message={e.message}/>)

    const onMessageChangeLocal = (e) => {
        props.onMessageChange(e.target.value)
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
                    <AddMessage message={props.newDialogMessage} onMessageAdd={props.onMessageAdd} onMessageChange={onMessageChangeLocal}/>
                </div>
            </div>
        </div>
    );
};

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

export default Dialogs;
