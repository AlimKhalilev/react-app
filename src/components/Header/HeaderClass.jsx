import logo from "./logo.svg";
import "./Header.scss";
import React from "react";
import { NavLink } from "react-router-dom";

class HeaderClass extends React.Component {

    // componentDidMount() {
    //     this.props.getAuth(); // Thunk
    // }

    render() {
        return <Header {...this.props}/>
    }

};

const Header = (props) => {

    console.log("перерисовка");

    return (
        <header className="header">
            <img src={logo} alt="logo" />
            <div className="header-content">
                {props.isAuth ? <LoginInfo {...props}/> : <NavLink to="/login">Login</NavLink>}
            </div>
        </header>
    );
}

const LoginInfo = (props) => {
    const goAway = () => {
        props.LogoutUser();
    }

    return (
        <div>
            <span>{props.login}</span>
            <button onClick={goAway}>LogOut</button>
        </div>
    )
}

export default HeaderClass;
