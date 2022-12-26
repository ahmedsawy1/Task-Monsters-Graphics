import {View, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import HomeScreen from './src/screens/HomeScreen';
import FlashMessage from 'react-native-flash-message';
import Navigation from './src/navigation/Navigation';

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />

      <FlashMessage
        position="top"
        floating
        hideOnPress={true}
        style={{paddingTop: 15}}
        // titleStyle={{fontFamily: Fonts.Medium, paddingTop: 10}}
        // textStyle={{fontFamily: Fonts.Medium}}
      />
    </Provider>
  );
}
