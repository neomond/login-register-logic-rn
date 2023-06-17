import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../redux/store';
import {ConfirmUser} from '../redux/store/thunk/AuthThunk';

const TwoFactorAuthView = ({navigation}: any) => {
  const [code, setCode] = useState('');
  const email = useSelector((state: RootState) => state.authSlice.user.email);
  const dispatch = useDispatch<AppDispatch>();

  const confirmHandle = () => {
    dispatch(
      ConfirmUser({
        email: email,
        code: code,
      }),
    ).then(res => {
      if (res) {
        navigation.navigate('Profile');
      } else {
        Alert.alert('something wrong');
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Two-Factor Authentication</Text>
      <Text style={styles.description}>
        Enter the code sent to your email to complete the login process.
      </Text>
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Enter Code"
          keyboardType="number-pad"
          value={code}
          onChangeText={setCode}
          maxLength={6}
        />
        <TouchableOpacity style={styles.button} onPress={confirmHandle}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logoContainer: {
    overflow: 'hidden',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  description: {
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    shadowColor: '#00CED1',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#00CED1',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default TwoFactorAuthView;
