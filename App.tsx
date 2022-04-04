/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// @ts-ignore
import React, {useEffect} from 'react';
import {LogBox, StatusBar} from 'react-native';
import {Router} from './src/Router';
import {persistStore} from 'redux-persist';
import SplashScreen from 'react-native-splash-screen';
import {store} from './src/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

let persistor = persistStore(store);
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <Router />
      </PersistGate>
    </Provider>
  );
};

export default App;
