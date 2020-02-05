import React, { Component } from 'react';
import Home from  './scene/Home';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import * as Font from 'expo-font';

const  navigation  = createStackNavigator({
  Home:{ screen:Home},
},{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 });

const App = createAppContainer(navigation);

export default App;