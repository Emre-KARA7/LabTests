import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Profile} from '../Auth';
import {AnalytCreate, AnalytList} from '../Lab';

const Tab = createBottomTabNavigator();

function AdminRouter() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="AnalytList" component={AnalytList} />
      <Tab.Screen name="AnalytCreate" component={AnalytCreate} />
    </Tab.Navigator>
  );
}

export default AdminRouter;
