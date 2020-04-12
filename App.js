import React, { Component } from 'react';
import { View, AppRegistry } from "react-native";
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from './src/reducers'
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
    const store = createStore(reducer, applyMiddleware(thunk))

    console.disableYellowBox = true;
    if (this.state.loading) {
      return (
        <View></View>
      );
    }
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('emergency_mobile', () => MyComponent)