import "./Header.css";
import logo from "../../assets/logo/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <img
          src={logo}
          alt="Favorcito Weather Logo"
          className="header__logo"
        />
      </div>
    </header>
  );
};


export default Header;