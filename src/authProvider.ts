import { AuthForm, UserParam } from "types/user";

const apiUrl = process.env.REACT_APP_API_URL;

const localStorageKey = "__auth_provider_token__";

export const getToken = () => window.localStorage.getItem(localStorageKey);

export const handleUserResponse = ({ user }: { user: UserParam }) => {
  window.localStorage.setItem(localStorageKey, user.token || "");
  return user;
};

export const login = (data: AuthForm) => {
  console.log(data);

  return fetch(`${apiUrl}/login`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (res) => {
    if (res.ok) {
      const userInfo = await res.json();
      return handleUserResponse(userInfo);
    } else {
      return Promise.reject(data);
    }
  });
};

export const register = (data: AuthForm) => {
  return fetch(`${apiUrl}/register`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (res) => {
    if (res.ok) {
      const userInfo = await res.json();
      return handleUserResponse(userInfo);
    } else {
      return Promise.reject(data);
    }
  });
};

export const logout = async () =>
  window.localStorage.removeItem(localStorageKey);
