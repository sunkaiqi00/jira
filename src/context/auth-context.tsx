import { createContext, ReactNode, useContext, useState } from 'react';
import { UserInfo } from '../types/user';
import * as auth from '../auth-provider';

export interface AuthFrom {
  username: string;
  password: string;
}

const AuthContext = createContext<
  | {
      user: UserInfo | null;
      login: (form: AuthFrom) => Promise<void>;
      register: (form: AuthFrom) => Promise<void>;
      logout: () => Promise<void>;
    }
  | undefined
>(undefined);
AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserInfo | null>(null);

  const login = (form: AuthFrom) => auth.login(form).then(setUser);
  const register = (form: AuthFrom) => auth.register(form).then(setUser);
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
    throw new Error('userAuth必须在AuthProvider中使用');
  }
  return context;
};
