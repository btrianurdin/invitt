import { createContext, ReactNode, useContext } from 'react';
import useUser from '../hooks/useUser';
import { IUser } from '../interfaces';

export interface IAuthContext {
  isLoading: boolean;
  isLogin: boolean;
  user: IUser | null;
}

const AuthContext = createContext<IAuthContext>({
  isLoading: true,
  isLogin: false,
  user: null,
});

export const useAuthContext = (): IAuthContext => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps): JSX.Element {
  const { data, isLoading } = useUser();

  return (
    <AuthContext.Provider value={{
      user: data,
      isLoading,
      isLogin: Boolean(!isLoading && data && data),
    }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
