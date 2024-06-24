import axios from "axios";

export const AuthService = {
  loginService: async (email, password) => {
    const response = await axios.post(
      "https://api.escuelajs.co/api/v1/auth/login",
      {
        email: email,
        password: password,
      }
    );

    if (response.data)
      localStorage.setItem("user", JSON.stringify(response.data));

    return response;
  },
  logoutService: () => {
    localStorage.removeItem("user");
  },
};
