import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Profile} from '../Auth';
import {AnalytCreate, AnalytList, GuideList, GuideCreate, AnalytRecordList} from '../Lab';

const Tab = createBottomTabNavigator();
const AnalytStack = createNativeStackNavigator();

function AnalytStackNavigator() {
  return (
    <AnalytStack.Navigator>
      <AnalytStack.Screen name="AnalytList" component={AnalytList} />
      <AnalytStack.Screen name="AnalytCreate" component={AnalytCreate} />
    </AnalytStack.Navigator>
  );
}

function GuideStackNavigator() {
  return (
    <AnalytStack.Navigator>
      <AnalytStack.Screen name="GuideList" component={GuideList} />
      <AnalytStack.Screen name="GuideCreate" component={GuideCreate} />
      <AnalytStack.Screen name="AnalytRecordList" component={AnalytRecordList} />
    </AnalytStack.Navigator>
  );
}

function AdminRouter() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Analyt" component={AnalytStackNavigator} />
      <Tab.Screen name="Guide" component={GuideStackNavigator} />
    </Tab.Navigator>
  );
}

export default AdminRouter;
