import logo from "./logo.svg";
import "./Header.scss";

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="logo" />
            <div className="header-content">TheChampGuess</div>
        </header>
    );
};

export default Header;
