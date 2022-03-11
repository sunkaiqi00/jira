import { useAuth } from "context/AuthContext";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { AuthForm } from "types/user";

const apiUrl = process.env.REACT_APP_API_URL;

const Login = () => {
  const [userInfo, setUserInfo] = useState<AuthForm>({
    userName: "",
    password: "",
  });
  const { user, login } = useAuth();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(userInfo);

    // console.log(userInfo);
    // fetch(`${apiUrl}/login`, {
    //   method: "post",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(userInfo),
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log(res);
    //   });
  };
  const handleChnage = (e: ChangeEvent<HTMLInputElement>) => {
    const key = e.target.name;
    const value = e.target.value;
    setUserInfo({
      ...userInfo,
      [key]: value,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      {user && <div>登陆成功，用户名为：{user.name}</div>}
      <label htmlFor="userName">用户名: </label>
      <input
        name="userName"
        id="userName"
        value={userInfo.userName}
        onChange={handleChnage}
      />
      <br />
      <label htmlFor="password">密码: </label>
      <input
        name="password"
        id="password"
        type="password"
        value={userInfo.password}
        onChange={handleChnage}
      />
      <br />
      <button type="submit">登 录</button>
      {/*  */}
    </form>
  );
};

export default Login;
