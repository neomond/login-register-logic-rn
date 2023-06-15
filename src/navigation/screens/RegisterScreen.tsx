import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';
import {useDispatch} from 'react-redux';
// import { register } from './redux/userSlice';

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //   const handleRegister = () => {
  //     dispatch(register({ email, password }));
  //   };

  return (
    <View>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {/* <Button title="Register" onPress={handleRegister} /> */}
    </View>
  );
};

export default RegisterScreen;
