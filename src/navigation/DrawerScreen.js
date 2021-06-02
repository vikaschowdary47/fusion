import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import LoginScreens from './LoginScreens';
const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Logout" component={LoginScreens} />
    </Drawer.Navigator>
  );
};

export default DrawerScreen;
