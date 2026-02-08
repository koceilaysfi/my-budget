export const isValidValue = (value, type) => {
  switch (type) {
    case "text":
      return value !== "";
    case "email":
      return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
    case "password":
      return /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(value);
    case "number":
      return /^\d+,\d{2}$/.test(value);
    default:
      return true;
  }
};

export const getErrorValidation = (type) => {
  switch (type) {
    case "email":
      return "Veuillez saisir une adresse email valide (ex : user@example.com)";
    case "password":
      return "Le mot de passe doit contenir au moins 8 caractères, une majuscule, un chiffre et un caractère spécial";
    case "number":
      return "Veuillez saisir un montant valide avec deux chiffres après la virgule (ex : 1234.56)";
    default:
      return "Ce champ est obligatoire";
  }
};

export const formValidation = (form, type) => {
  const formData = new FormData(form);
  let notValidWithError = [];

  formData.forEach((value, name) => {
    const element = form.elements[name];
    const type = element.dataset.type;
    if (!isValidValue(value, type)) {
      notValidWithError.push({
        id: parseInt(element.dataset.id),
        error: getErrorValidation(type),
      });
    }
  });
  if (notValidWithError.length !== 0) {
    return notValidWithError;
  }
  if (type === "signup") {
    notValidWithError = passwordConfirmation(
      form,
      "password",
      "confirmation",
    );
  }
  return notValidWithError;
};

const passwordConfirmation = (
  form,
  passwordName = "passeword",
  confirmationName = "confirmation",
) => {
  const formData = new FormData(form);
  const pwdElement = form.elements[passwordName];
  const confirmPwdElement = form.elements[confirmationName];
  if (formData.get(passwordName) === formData.get(confirmationName)) {
    return [];
  }
  return [
    {
      id: parseInt(pwdElement.dataset.id),
      error: "Les mots de passe doivent être identiques",
    },
    {
      id: parseInt(confirmPwdElement.dataset.id),
      error: "Les mots de passe doivent être identiques",
    },
  ];
};
