import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '../Auth';

const Stack = createNativeStackNavigator();

function UnauthRouter() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

export default UnauthRouter;
