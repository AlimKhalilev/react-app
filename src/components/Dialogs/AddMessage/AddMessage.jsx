import "./AddMessage.scss"

const AddMessage = (props) => {

    return (
        <div className="dialog-content-messages-add">
            <textarea cols="30" rows="2" ref={props.messageInfo} value={props.message} onChange={props.onMessageChange}></textarea>
            <button className="button_primary" onClick={props.onMessageAdd}>Add</button>
        </div>
    )
}

export default AddMessage;