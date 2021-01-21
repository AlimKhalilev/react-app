import logo from "./logo.svg";
import "./Header.scss";
import React from "react";

class HeaderClass extends React.Component {

    componentDidMount() {
        this.props.getAuth(); // Thunk
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
