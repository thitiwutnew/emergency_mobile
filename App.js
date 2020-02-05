import React, { Component } from 'react';
import { View, } from "react-native";
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Home from './src/route';


export default class MyComponent extends Component {

  state = {
    loading: true
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    })
    this.setState({ loading: false })
  }

  render() {
       if (this.state.loading) {
         return (
           <View></View>
         );
       }
        return (
          <Home />
                )
   }
}
