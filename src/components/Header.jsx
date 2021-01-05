import logo from './../logo.svg';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <div className="header-content">Test</div>
    </header>
  );
};

export default Header;