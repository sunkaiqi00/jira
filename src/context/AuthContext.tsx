import React, { createContext, ReactNode, useContext, useState } from "react";

import { AuthForm, UserParam } from "types/user";

import * as auth from "../authProvider";

export interface ContextValue {
  user: UserParam | null;
  login: (form: AuthForm) => Promise<void>;
  register: (form: AuthForm) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<ContextValue | undefined>(undefined);

AuthContext.displayName = "AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserParam | null>(null);

  const login = (form: AuthForm) =>
    auth.login(form).then((user: UserParam) => setUser(user));
  const register = (form: AuthForm) =>
    auth.register(form).then((user: UserParam) => setUser(user));
  const logout = () => auth.logout().then(() => setUser(null));

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth必须在AuthProvider中使用");
  }
  return context;
};
