import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import Main from './Main';
import {store} from './src/store/store';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Provider store={store}>
          <Main />
        </Provider>
      </NavigationContainer>
    </>
  );
};

export default App;
