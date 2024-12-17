import React from 'react';
import {AuthProvider, useAuth} from './src/Auth';
import {NavigationContainer} from '@react-navigation/native';
import {UserRouter, AdminRouter, UnauthRouter} from './src/Router';

const App: React.FC = () => (
  <AuthProvider>
    <NavigationContainer>
      <PageLogic />
    </NavigationContainer>
  </AuthProvider>
);

const PageLogic: React.FC = () => {
  const {tokenAuth, jwtObj} = useAuth();

  console.log('jwtObj', jwtObj);
  console.log('tokenAuth', tokenAuth);

  if (tokenAuth === null) {
    return <UnauthRouter />;
  } else if (jwtObj.role === 'admin') {
    return <AdminRouter />;
  } else {
    return <UserRouter />;
  }
};

export default App;
