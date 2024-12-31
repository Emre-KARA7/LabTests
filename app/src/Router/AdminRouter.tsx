import React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Profile} from '../Auth';
import {UserList} from '../Tests';
import {
  AnalytCreate,
  AnalytList,
  GuideList,
  GuideCreate,
  AnalytRecordList,
  AnalytRecordCreate,
} from '../Lab';

const Tab = createBottomTabNavigator();
const AnalytStack = createNativeStackNavigator();

function GuideStackNavigator() {
  return (
    <AnalytStack.Navigator>
      <AnalytStack.Screen name="GuideList" component={GuideList} />
      <AnalytStack.Screen name="GuideCreate" component={GuideCreate} />
      <AnalytStack.Screen
        name="AnalytRecordList"
        component={AnalytRecordList}
      />
      <AnalytStack.Screen
        name="AnalytRecordCreate"
        component={AnalytRecordCreate}
      />
      <AnalytStack.Screen name="AnalytList" component={AnalytList} />
      <AnalytStack.Screen name="AnalytCreate" component={AnalytCreate} />
    </AnalytStack.Navigator>
  );
}

function TestsStackNavigator() {
  return (
    <AnalytStack.Navigator>
      <AnalytStack.Screen name="UserList" component={UserList} />
    </AnalytStack.Navigator>
  );
}

function AdminRouter() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        options={{tabBarIcon: () => <Text style={{fontSize: 22}}>👤</Text>}}
        name="Profile"
        component={Profile}
      />
      <Tab.Screen
        options={{tabBarIcon: () => <Text style={{fontSize: 22}}>🧪</Text>}}
        name="Tests"
        component={TestsStackNavigator}
      />
      <Tab.Screen
        options={{tabBarIcon: () => <Text style={{fontSize: 22}}>📑</Text>}}
        name="Guide"
        component={GuideStackNavigator}
      />
    </Tab.Navigator>
  );
}

export default AdminRouter;
