import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { formValidation } from "../utils/validation.js";
import { formDataToObject } from "../utils/form.js";

import Btn from "./Btn.jsx";
import PasswordInput from "./PasswordInput.jsx";
import Input from "./Input.jsx";
import Spinner from "./Spinner.jsx";

const Form = ({ type, onSubmit, inputsData, buttonValue, children }) => {
  const [notValidInputs, setNotValidInputs] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [succesMsg, setSuccesMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const notValidWithError = formValidation(form, type);
    setNotValidInputs(notValidWithError);
    if (notValidWithError.length !== 0) {
      return;
    }

    const data = new FormData(form);
    const values = formDataToObject(data);

    setIsLoading(true);
    const result = await onSubmit(values);
    setIsLoading(false);

    if (!(result.code === 200 || result.code === 201)) {
      setSuccesMsg("");
      setErrorMsg(result.message);
      return;
    }
    setErrorMsg("");
    switch (type) {
      case "signup":
        setSuccesMsg(
          "Inscription réussie ! Connectez-vous dès maintenant et commencez votre expérience.",
        );
        break;
      case "login":
        navigate("/dashboard");
        break;
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {inputsData.map((data) => {
        const id = data.id;
        const index = indexOfInput(id, notValidInputs);
        const isError = index !== -1;

        return data.type === "password" ? (
          <PasswordInput key={id} {...data} dataId={id}>
            {isError && (
              <p className="error-msg">{notValidInputs[index].error}</p>
            )}
          </PasswordInput>
        ) : (
          <Input key={id} {...data} dataId={id}>
            {isError && (
              <p className="error-msg">{notValidInputs[index].error}</p>
            )}
          </Input>
        );
      })}
      <Btn className="primary-btn" disabled={isLoading}>
        {isLoading ? <Spinner size={"16px"} className={"secondary-spinner"}/> : buttonValue}
      </Btn>
      {errorMsg && <p className="error-msg server-msg">{errorMsg}</p>}
      {succesMsg && <p className="server-msg success-msg">{succesMsg}</p>}

      {children}
    </form>
  );
};

export default Form;

const indexOfInput = (id, notValidInputs) => {
  let index = -1;
  notValidInputs.forEach((input, i) => {
    if (id === input.id) {
      index = i;
    }
  });
  return index;
};
