import React from 'react';
import {AuthProvider, useAuth} from './src/Auth';
import {NavigationContainer} from '@react-navigation/native';
import { UserRouter, AdminRouter, UnauthRouter } from './src/Router';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <AuthProvider>
        <PageLogic />
      </AuthProvider>
    </NavigationContainer>
  );
}

function PageLogic(): React.JSX.Element {
  const {tokenAuth} = useAuth();
  if (tokenAuth) {
    return <UserRouter />;
  } else {
    return <UnauthRouter />;
  }
}

export default App;
