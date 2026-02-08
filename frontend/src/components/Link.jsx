import { Link } from "react-router-dom";
const PrimaryLink = ({ to, className = "", children }) => {
  return (
    <Link className={className + " link"} to={to}>
      {children}
    </Link>
  );
};

export default PrimaryLink;
