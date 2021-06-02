import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../components/Login';

const Stack = createStackNavigator();

const LoginScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default LoginScreens;
