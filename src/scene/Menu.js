import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from '../styles/SideMenu.style';
import {NavigationActions} from 'react-navigation';
import {ScrollView, View,Image} from 'react-native';
import { Container, Header, Left, Body, Right, Button,Icon, Content,Badge,Text,Footer, FooterTab } from 'native-base';

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Image 
              style={styles.image}
              source={require('../resource/Images/Icon-menu.png')} 
            />
            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} >
              <Icon 
                name="plus-circle" 
                type="FontAwesome"
                style={{fontSize:35,marginLeft: '13%',color:'#fff'}}
              />  First-Aid
              </Text>
              <Text style={styles.navItemStyle} >
              <Icon 
                name="heartbeat" 
                type="FontAwesome"
                style={{fontSize:35,marginLeft: '13%',color:'#fff'}}
              />  CPR
              </Text>
              <Text style={styles.navItemStyle} >
              <Icon 
                name="heart-broken" 
                type="FontAwesome5"
                style={{fontSize:35,marginLeft: '13%',color:'#fff'}}
              />  AED
              </Text>
              <Text style={styles.navItemStyle} >
              <Icon 
                name="md-chatboxes" 
                type="Ionicons"
                style={{fontSize:35,marginLeft: '13%',color:'#fff'}}
              />  Chat
              </Text>
              <Text style={styles.navItemStyle} >
              <Icon 
                name="history" 
                type="FontAwesome"
                style={{fontSize:35,marginLeft: '13%',color:'#fff'}}
              />  History
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;