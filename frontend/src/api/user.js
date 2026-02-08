export const createUser = async (data) => {
  try {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    return json;
  } catch (e) {
    return {
      code: 500,
      message: "Oups… quelque chose s’est mal passé de notre côté !",
    };
  }
};

export const loginUser = async (data) => {
  try {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    return json;
  } catch (e) {
    return {
      code: 500,
      message: "Oups… quelque chose s’est mal passé de notre côté !",
    };
  }
};
