import React, { Component } from 'react';
import Login from './scene/Login';
import Home from './scene/Home';
import LeftMenu from './LeftMenu';
import History from './scene/History';
import Map from './components/Map';
import Firstaid from './scene/FirstAid'
import facebooklogin from './components/FacebookLogin'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
const navigation = createStackNavigator({
  Login: { screen: Login },
  Home: { screen: Home },
  LeftMenu: { screen: LeftMenu },
  History: { screen: History },
  Map: { screen: Map },
  Firstaid: { screen: Firstaid },
  facebooklogin: { screen: facebooklogin },
}, {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: true,
  },
  initialRouteName: "LeftMenu",
  headerMode: "none",
  swipeEnabled: false
});

export default createAppContainer(navigation);