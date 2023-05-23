/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {SafeAreaView, StyleSheet, Text} from 'react-native';
import LoginScreen from './src/screens/loginScreen/';
import StartScreen from './src/screens/startScreen';
import Navigation from './src/navigation';


/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      
   <Navigation/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor:'white',
    height:"100%",
    flex:1,

   
  },
});

export default App;
