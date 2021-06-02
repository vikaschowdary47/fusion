import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreens from './LoginScreens';
import DrawerScreen from './DrawerScreen';

const Stack = createStackNavigator();

const MainScreens = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreens">
      <Stack.Screen
        name="LoginScreens"
        component={LoginScreens}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DrawerScreen"
        component={DrawerScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainScreens;
