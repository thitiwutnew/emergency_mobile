import React, { Component } from 'react';
import Home from  './scene/Home';
import LeftMenu from './LeftMenu';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const  navigation  = createStackNavigator({
  Home:{  screen:Home },
  LeftMenu:{ screen:LeftMenu },
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