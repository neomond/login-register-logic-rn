import {Text} from 'react-native';
import React, {useEffect, useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {RootState} from './src/store/store';
import {tokenCheck} from './src/util/authHelper';
import {login, signout} from './src/store/loginSlice';
import DashboardScreen from './src/screens/private/DashboardScreen';
import PublicStackScreen from './src/stack/PublicStackScreen';

const Main = () => {
  const isLoggedIn = useSelector((state: RootState) => state.login);
  let dispatch = useDispatch();
  const [loading, setloading] = useState(true);
  //if the token EXISTS and has not expired, dashboard, if expired login page
  useEffect(() => {
    tokenCheck().then(res => {
      if (res == true) {
        setloading(false);
        dispatch(login());
      } else {
        setloading(false);
        dispatch(signout());
      }
    });
  }, []);

  const openScreen = () => {
    if (!loading) {
      if (isLoggedIn.value) {
        return <DashboardScreen />;
      } else {
        return <PublicStackScreen />;
      }
    } else {
      return <Text>loading...</Text>;
    }
  };

  return <>{openScreen()}</>;
};

export default Main;
