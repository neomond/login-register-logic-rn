import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';
import {useDispatch} from 'react-redux';
// import { confirmCode } from './redux/userSlice';

const ConfirmEmailScreen = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');

  //   const handleConfirmCode = () => {
  //     dispatch(confirmCode({ email, code }));
  //   };

  return (
    <View>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Confirmation Code"
        value={code}
        onChangeText={setCode}
      />
      {/* <Button title="Confirm Code" onPress={handleConfirmCode} /> */}
    </View>
  );
};

export default ConfirmEmailScreen;
