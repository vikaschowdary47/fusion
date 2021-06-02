import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Pressable,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const verifyUser = () => {
    if (email === '' && password === '') {
      Alert.alert('Please enter email or password!');
    } else if (email === 'root' && password === 'root') {
      navigation.navigate('DrawerScreen');
    } else {
      Alert.alert('Wrong email or password!');
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.inputContainer}>
          <View style={[styles.placeholderIcon, {marginRight: 24}]}>
            <Icon name="user" size={26} color="grey" />
          </View>
          <TextInput
            value={email}
            placeholder="Email Address"
            onChangeText={input => setEmail(input)}
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <View style={[styles.placeholderIcon, {marginRight: 17}]}>
            <MaterialIcon name="vpn-key" size={26} color="grey" />
          </View>
          <TextInput
            value={password}
            onChangeText={input => setPassword(input)}
            placeholder="Password"
            style={styles.input}
            secureTextEntry
          />
        </View>
        <Pressable>
          <Text style={styles.forgotPassword}>Forgot Password ?</Text>
        </Pressable>
      </View>
      <View>
        <TouchableOpacity style={styles.loginButton} onPress={verifyUser}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.version}>v 0.0.5</Text>
      </View>
    </View>
  );
};

export default Login;
const w = '100%';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    backgroundColor: 'lightgrey',
  },
  inputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: 'grey',
    borderWidth: 0.6,
    borderRadius: 999,
    width: 300,
    marginBottom: 15,
    backgroundColor: 'white',
  },
  forgotPassword: {
    color: 'blue',
    textAlign: 'right',
    marginRight: 25,
  },
  loginText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 21,
  },
  loginButton: {
    backgroundColor: 'darkblue',
    paddingHorizontal: 40,
    paddingVertical: 11,
    marginTop: 25,
    borderRadius: 999,
  },
  input: {
    fontSize: 17,
  },
  placeholderIcon: {
    marginHorizontal: 25,
  },
  version: {
    textAlign: 'center',
    color: 'grey',
  },
});
