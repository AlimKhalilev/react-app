import logo from "./logo.svg";
import "./Header.scss";
import React from "react";
import * as axios from "axios"

class HeaderClass extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {
            withCredentials: true
        }) // загружаем данные с API в процессе конструктора класса (один раз)
        .then(response => {
            if (response.data.resultCode === 0) { // нет ошибок в запросе, пользователь авторизирован
                let myData = response.data.data;
                this.props.setUserData(myData.id, myData.email, myData.login);
            }
        });
    }

    render() {
        return <Header {...this.props}/>
    }

};

const Header = (props) => {

    return (
        <header className="header">
            <img src={logo} alt="logo" />
            <div className="header-content">
                {props.isAuth ? props.login : <a href="#2">Login</a>}
            </div>
        </header>
    );
}

export default HeaderClass;
