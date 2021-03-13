import { AppRegistry } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';

import { name as appName } from './app.json';
import App from './App';
import store from './src/redux/Store';

const AppRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppRedux);
