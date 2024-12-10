import React from 'react';
import {Login, Profile, AuthProvider, useAuth} from './src/Auth';

function App(): React.JSX.Element {
  return (
    <AuthProvider>
      <PageLogic />
    </AuthProvider>
  );
}

function PageLogic(): React.JSX.Element {
  const {tokenAuth} = useAuth();
  if (tokenAuth) {
    return (
      <Profile />
    );
  } else {
    return <Login />;
  }
}

export default App;
