import React from 'react';
import {View, Text, StyleSheet, Pressable, Alert} from 'react-native';
import Login from './src/components/Login';
import Main from './src/components/Main';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createAppContainer} from '@react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Logout" component={LoginScreens} />
    </Drawer.Navigator>
  );
};
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

const HomeScreen = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreens">
      <Stack.Screen
        name="Main"
        component={Main}
        options={({navigation}) => {
          return {
            headerTitle: () => (
              <View>
                <Text style={{textAlign: 'center'}}>Fusion</Text>
              </View>
            ),
            headerLeft: () => (
              <View style={{marginLeft: 7}}>
                <Pressable onPress={() => navigation.openDrawer()}>
                  <Icon name="bars" size={26} color="black" />
                </Pressable>
              </View>
            ),
            headerRight: () => (
              <View style={{marginRight: 7}}>
                <Pressable>
                  <Icon name="plus" size={26} color="black" />
                </Pressable>
              </View>
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        {/* <LoginScreens /> */}
        <MainScreens />
        {/* <DrawerScreen /> */}
        {/* <DrawerScreen /> */}
        {/* <Text>fgh</Text> */}
      </View>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
