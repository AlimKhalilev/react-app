import { NavLink } from "react-router-dom";
import "./Aside.scss";

const Aside = () => {
    return (
        <aside className="aside">
            <nav>
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
        </aside>
    );
};

export default Aside;
