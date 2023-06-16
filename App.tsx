import React from 'react';
import RootStack from './src/navigator/index';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <RootStack />
    </Provider>
  );
};
export default App;
