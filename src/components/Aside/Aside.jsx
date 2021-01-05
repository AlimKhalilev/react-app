import "./Aside.scss";

const Aside = () => {
    return (
        <aside className="aside">
            <nav>
                <ul>
                    <li>
                        <a href="#a">Новости</a>
                    </li>
                    <li>
                        <a href="#a">Сообщения</a>
                    </li>
                    <li>
                        <a href="#a">Прочее</a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Aside;
