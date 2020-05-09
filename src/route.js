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
import registerfbuser from './components/Registerfbuser'
import Aed from './components/Aed'
import registeruser from './components/Registeruser'
import Registeruserdata from './components/Registeruserdata'
import profile from './scene/profile'
import editprofile from './scene/editprofile'

const navigation = createStackNavigator({
  Home: { screen: Home },
  Login: { screen: Login },
  LeftMenu: { screen: LeftMenu },
  History: { screen: History },
  Map: { screen: Map },
  Firstaid: { screen: Firstaid },
  facebooklogin: { screen: facebooklogin },
  Cpr: { screen: Cpr },
  registerfbuser: { screen: registerfbuser },
  registeruser: { screen: registeruser },
  Aed: { screen: Aed },
  Registeruserdata: { screen: Registeruserdata },
  profile: { screen: profile },
  editprofile : { screen: editprofile },

}, {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: true,
  },
  initialRouteName: "LeftMenu",
  headerMode: "none",
  swipeEnabled: true
});

export default createAppContainer(navigation);