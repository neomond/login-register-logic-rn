import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';
import {useDispatch} from 'react-redux';
// import {forgotPassword} from './redux/userSlice';

const ForgotPasswordScreen = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');

  //   const handleForgotPassword = () => {
  //     dispatch(forgotPassword({email}));
  //   };

  return (
    <View>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      {/* <Button title="Forgot Password" onPress={handleForgotPassword} /> */}
    </View>
  );
};

export default ForgotPasswordScreen;
