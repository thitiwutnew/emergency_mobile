import React, { Component } from 'react'
import { Alert } from 'react-native'
import { Container, Footer, Left, Body, Right, Button, Icon, View, Form, Text, Input, Item } from 'native-base';
import * as Facebook from 'expo-facebook';
import { connect } from 'react-redux'
import Home from '../scene/Home';
import { setUsername } from '../actions/at_facebooklogin'
import { checkloginfacebook } from '../actions/at_checklogin'

var name="";
class FacebookLogin extends Component {
  constructor(props) {
    super();
    this.state = {
      statuslogin: false,
    };
  }

  async facebookLogin() {
    var username=[];
    try {
      await Facebook.initializeAsync('2340201029416664');
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
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        this.setState({statuslogin: true})
        username = (await response.json()).name;
      } else {
        this.setState({statuslogin: false})
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
    if(this.state.statuslogin == true){
      this.props.handleSetName(username)
      let chk =1; 
      this.props.handleChklogin(chk)
    }
  }


  render() {
    const { statuslogin } = this.state;
    return (
      statuslogin == false ? <Button transparent onPress={this.facebookLogin.bind(this)} ><Icon name="facebook-square" type="FontAwesome" style={{ color: '#4267b2', fontSize: 30 }} /></Button> :  null
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleSetName: (text) => {
    dispatch(setUsername(text))
  },
  handleChklogin: (text) => {
    dispatch(checkloginfacebook(text))
  }
})
export default connect(null, mapDispatchToProps)(FacebookLogin)