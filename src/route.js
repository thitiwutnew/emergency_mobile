import React, { Component } from 'react';
import Login from './scene/Login';
import Home from './scene/Home';
import LeftMenu from './LeftMenu';
import History from './scene/History';
import Map from './components/Map';
import Firstaid from './scene/FirstAid'
import facebooklogin from './components/FacebookRegister'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Cpr from './scene/Cpr'
import registeruserdata from './components/Registeruserdata'
import registeruser from './components/Registeruser'
import Aed from './components/Aed'
const navigation = createStackNavigator({
  Login: { screen: Login },
  Home: { screen: Home },
  LeftMenu: { screen: LeftMenu },
  History: { screen: History },
  Map: { screen: Map },
  Firstaid: { screen: Firstaid },
  facebooklogin: { screen: facebooklogin },
  Cpr: { screen: Cpr },
  registeruserdata: { screen: registeruserdata},
  registeruser: { screen: registeruser },
  Aed: { screen: Aed },
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