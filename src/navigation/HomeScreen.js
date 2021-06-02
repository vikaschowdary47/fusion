import React from 'react';
import {View, Text, StyleSheet, Pressable, Alert} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import Main from '../components/Main';

const Stack = createStackNavigator();

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

export default HomeScreen;
