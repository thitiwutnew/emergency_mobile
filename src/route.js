import React, { Component } from 'react';
import Home from  './scene/Home';
import LeftMenu from './LeftMenu';
import History from './scene/History';
import Login from './scene/Login';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const  navigation  = createStackNavigator({
  Home:{  screen:Home },
  LeftMenu:{ screen:LeftMenu },
  History:{ screen:History },
  Login:{ screen:Login },
},{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  },
  initialRouteName: "LeftMenu",
  headerMode: "none",
  swipeEnabled: false
 });

export default createAppContainer(navigation);