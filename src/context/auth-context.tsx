import { createContext, ReactNode, useCallback, useContext } from 'react';
import { UserInfo } from '../types/user';
import * as auth from '../auth-provider';
import { http } from '../api/http';
import { useMount } from '../hooks';
import useAsync from 'hooks/use-async';
import { FullPageError, FullPageLoading } from 'components/lib';
import { DevTools } from 'jira-dev-tool';

export interface AuthFrom {
  username: string;
  password: string;
}

const initialUser = async () => {
  let user = null;
  const token = auth.getToken();
  if (token) {
    const data = await http('/me', { token });
    user = data.user;
  }
  return user;
};

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
  const {
    run,
    data: user,
    setData: setUser,
    error,
    isLoading,
    isIdle,
    isError,
  } = useAsync<UserInfo | null>();

  const login = (form: AuthFrom) => auth.login(form).then(setUser);
  const register = (form: AuthFrom) => auth.register(form).then(setUser);
  const logout = () => auth.logout().then(() => setUser(null));

  useMount(
    useCallback(() => {
      run(initialUser());
    }, [run])
  );

  if (isIdle || isLoading) {
    return <FullPageLoading />;
  }

  if (isError) {
    return (
      <div>
        <FullPageError error={error} />
        <DevTools />
      </div>
    );
  }

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
