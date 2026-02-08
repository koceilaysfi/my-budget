import { useState } from "react";
import { GrMenu, GrClose } from "react-icons/gr";

const Menu = ({ children }) => {
  const [isClose, setIsClose] = useState(true);
  const handleToggle = () => setIsClose((v) => !v);
  return (
    <div className="menu">
      <span onClick={handleToggle}>{isClose ? <GrMenu /> : <GrClose />}</span>
      {!isClose && <div>{children}</div>}
    </div>
  );
};

export default Menu;
