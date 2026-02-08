import Logo from "./Logo.jsx";
import Menu from "./Menu.jsx";
const Header = ({ children }) => {
  return (
    <header className="header">
      <Logo />
      <nav className="nav-bar">{children}</nav>
      <Menu>{children}</Menu>
    </header>
  );
};

export default Header;
