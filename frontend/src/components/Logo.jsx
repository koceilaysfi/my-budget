import Link from "./Link.jsx";
import LogoSvg from "../assets/svgs/logo.svg";
const Logo = () => {
  return (
    <div className="logo-container">
      <Link to="/" className="hidden-link"></Link>
      <img src={LogoSvg} alt="logo" className="logo" />
      <span className="text-logo">MyBudget</span>
    </div>
  );
};

export default Logo;
