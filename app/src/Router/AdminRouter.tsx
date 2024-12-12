import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Profile} from '../Auth';

const Tab = createBottomTabNavigator();

function AdminRouter() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default AdminRouter;