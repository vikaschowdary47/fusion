import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainScreens from './src/navigation/MainScreens';

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <MainScreens />
        {/* <DrawerScreen /> */}
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
