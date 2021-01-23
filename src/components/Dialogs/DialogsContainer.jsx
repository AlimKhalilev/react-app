import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import { addDialogMessage} from "../../redux/dialogsReducer";

const mapStateToProps = (state) => {
    return {
        dialogPersons: state.dialogsPage.dialogPersons,
        dialogMessages: state.dialogsPage.dialogMessages
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onMessageAdd: () => {
//             dispatch(addMessageActionCreator());
//             //console.log("hello");
//         },
//         onMessageChange: (text) => {
//             dispatch(changeMessageActionCreator(text));
//             //console.log(messageInfo.current.value);
//         }
//     }
// }

const mapDispatchToProps = {
    addDialogMessage
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;