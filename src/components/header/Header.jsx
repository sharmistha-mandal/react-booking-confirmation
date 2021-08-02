import "./header.scss";
const Header = () => {
  return (
    <header className="header">
      <div className="header__container container">
        <img
          className="header__container-logo"
          src="images/rld-logo.svg"
          alt="Red Letter Days"
        />
      </div>
    </header>
  );
};

export default Header;
