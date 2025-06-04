/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import AppStack from './src/navigations/app_stack';
import { SafeAreaView } from 'react-native';
import { Colors } from './src/utils/app_colors';

const App = () => {
  return (
      
        <SafeAreaView style={{flex: 1, backgroundColor: 'transparent'}}>
          <AppStack />
          {/* <Toast /> */}
        </SafeAreaView>
    // <Provider store={store}>
    //   <PersistGate loading={null} persistor={persistor}>
      
    //   </PersistGate>
    // </Provider>
  );
};

export default App;
