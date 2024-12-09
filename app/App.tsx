import React from 'react';
import {Login, AuthProvider} from './src/Auth';

function App(): React.JSX.Element {
  return (
    <AuthProvider>
      <Login />
    </AuthProvider>
  );
}

export default App;
