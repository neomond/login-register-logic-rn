import {View, Text, SafeAreaView, Button} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {signout} from '../../store/loginSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DashboardScreen = () => {
  let dispatch = useDispatch();
  const signoutApp = () => {
    AsyncStorage.removeItem('token').then(res => {
      dispatch(signout());
    });
  };

  return (
    <SafeAreaView>
      <Text>DashboardScreen</Text>
      <Button title="Signout" onPress={signoutApp}></Button>
    </SafeAreaView>
  );
};

export default DashboardScreen;
