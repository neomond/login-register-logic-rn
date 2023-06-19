import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/public/LoginScreen';
import RegisterScreen from '../screens/public/RegisterScreen';
import ConfirmCodeScreen from '../screens/public/ConfirmCodeScreen';

const PublicStack = createNativeStackNavigator();


const PublicStackScreen = () => {
  return (
    <PublicStack.Navigator>
      <PublicStack.Screen name="Login" component={LoginScreen} />
      <PublicStack.Screen name="Register" component={RegisterScreen} />
      <PublicStack.Screen name="Confirm" component={ConfirmCodeScreen} />

    </PublicStack.Navigator>
  )
}

export default PublicStackScreen