import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Signup} from '../Auth';

const Stack = createNativeStackNavigator();

function UnauthRouter() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}

export default UnauthRouter;
