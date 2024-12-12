import {createContext, useContext} from 'react';

interface AuthContextProps {
  tokenAuth: string | null;
  jwtObj: any | null;
  loginAuth: (token: string) => void;
  logoutAuth: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
