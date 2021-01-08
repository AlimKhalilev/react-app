import { NavLink } from "react-router-dom";
import "./Aside.scss";
import Friend from "./Friend/Friend";

const Aside = (props) => {
    let myFrinds = props.data.friends.map(e => <Friend key={e.id} id={e.id} name={e.name}/>)

    return (
        <aside className="aside">
            <nav className="aside-nav">
                <ul>
                    <li>
                        <NavLink to="/profile">Профиль</NavLink>
                    </li>
                    <li>
                        <NavLink to="/news">Новости</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dialogs">Сообщения</NavLink>
                    </li>
                    <li>
                        <NavLink to="/other">Прочее</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="aside-friends">
                <div className="aside-friends-title">
                    <h3>Друзья:</h3>
                </div>
                <ul className="aside-friends-list">
                    {myFrinds}
                </ul>
            </div>
        </aside>
    );
};

export default Aside;
