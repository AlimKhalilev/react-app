import ava from "../../Dialogs/ava.jpg"
import "./Friend.scss"

const Friend = (props) => {
    return (
        <li>
            <img src={ava} alt="FriendImage" />
            <span>{props.name}</span>
        </li>
    );
};

export default Friend;