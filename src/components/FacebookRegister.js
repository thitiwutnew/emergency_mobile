import React, { Component } from 'react'
import { Alert } from 'react-native'
import { Container, Footer, Left, Body, Right, Button, Icon, View, Form, Text, Input, Item } from 'native-base'
import * as Facebook from 'expo-facebook'
import { connect } from 'react-redux'
import _ from 'lodash'
import Home from '../scene/Home'
import { setUsername } from '../actions/at_fblogin'
import { checkloginfacebook } from '../actions/at_checklogin'
import auth from '../model/auth'
import { AsyncStorage } from 'react-native'
class FacebookLogin extends Component {
  constructor(props) {
    super();
    this.state = {
      statuslogin: false,
    };
  }

  async facebookLogin() {
    var data=[];
    try {
      await Facebook.initializeAsync('2340201029416664')
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile','email'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`)
        this.setState({statuslogin: true})
        data = (await response.json());
      } else {
        this.setState({statuslogin: false})
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`)
    }
    if(this.state.statuslogin == true){
      let descriptionAuth = { facebookid: data.id, facebookname: data.name }
      let authToken = await auth.facebookAuth(descriptionAuth)
      let accessToken = `${_.get(authToken, 'data.accessToken')}`
      AsyncStorage.setItem('accessToken', accessToken)
      this.props.handleSetName(data.name)
      if(authToken.data.mustfilled==="true"){
        this.props.handleChklogin({
          mustfilled:authToken.data.mustfilled,
          facebookid:authToken.data.facebookid
        })
      }
      else if(authToken.data.mustfilled==="false"){ 
        this.props.handleChklogin({
          mustfilled:authToken.data.mustfilled,
          facebookid:authToken.data.facebookid
        })
      }
    }
  }


  render() {
    return (
      <Button transparent onPress={this.facebookLogin.bind(this)} ><Icon name="facebook-square" type="FontAwesome" style={{ color: '#0d8bf0', fontSize: Platform.OS === 'ios' ? 35 : 40 }} /></Button>
    );
  }
}
const mapStateToProps = (state) =>({
  status : state.checklogin.chklogin
})
const mapDispatchToProps = dispatch => ({
  handleSetName: (text) => {
    dispatch(setUsername(text))
  },
  handleChklogin: (text) => {
    dispatch(checkloginfacebook(text))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(FacebookLogin)