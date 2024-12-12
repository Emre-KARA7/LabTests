import React, {useState, ReactNode, useEffect} from 'react';
import {AuthContext} from './AuthContext';
import {jwtDecode} from 'jwt-decode';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthProvider = ({children}: {children: ReactNode}) => {
  const [tokenAuth, setTokenAuth] = useState<string | null>(null);
  const [jwtObj, setJwtObj] = useState<any | null>(null);

  useEffect(() => {
    // const loadToken = async () => {
    //   const storedToken = await AsyncStorage.getItem('token-auth');
    //   if (storedToken) {
    //     setTokenAuth(storedToken);
    //   }
    // };
    // loadToken();
  }, []);

  const loginAuth = async (token: string) => {
    setTokenAuth(token);
    const decoded = jwtDecode(token);
    setJwtObj({
      email: decoded.email,
      role: decoded.role,
      id: decoded.sub,
    });
    //await AsyncStorage.setItem('token-auth', token);
  };

  const logoutAuth = async () => {
    setTokenAuth(null);
    //await AsyncStorage.removeItem('token-auth');
  };

  return (
    <AuthContext.Provider value={{tokenAuth, jwtObj, loginAuth, logoutAuth}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
