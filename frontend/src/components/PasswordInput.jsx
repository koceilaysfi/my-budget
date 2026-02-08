import { useState } from "react";
import Input from "./Input.jsx";
import { HiEye, HiEyeOff } from "react-icons/hi";

const PasswordInput = ({ dataId, placeholder, name, label, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleToggle = () => setIsVisible((v) => !v);
  return (
    <Input
      type={!isVisible ? "password" : "text"}
      placeholder={placeholder}
      name={name}
      label={label}
      dataId={dataId}
      dataType="password"
    >
      {isVisible ? (
        <HiEyeOff onClick={handleToggle} />
      ) : (
        <HiEye onClick={handleToggle} />
      )}
      {children}
    </Input>
  );
};

export default PasswordInput;
