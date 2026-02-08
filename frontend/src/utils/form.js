export const formDataToObject = (formData) => {
  let data = {};
  formData.forEach((value, key) => {
    if (key !== "confirmation") {
      data = { ...data, [key]: value };
    }
  });
  return data;
};
