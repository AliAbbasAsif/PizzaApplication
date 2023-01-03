import React from 'react';
import {Text, View} from 'react-native';
import { Provider } from 'react-redux';
import AppRouter from './Config/AppRouter';
import store from './Store/store'

function App() {
  return (
    <>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </>
  );
}

export default App;
