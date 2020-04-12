import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from '../styles/SideMenu.style';
import {NavigationActions} from 'react-navigation';
import {ScrollView, View,Image} from 'react-native';
import { Container, Header, Left, Body, Thumbnail, Button,Icon, Content,Badge,Text,CardItem, Card } from 'native-base';
import { connect } from 'react-redux'
import { setUsername } from '../actions/facebooklogin'
import { checkloginfacebook } from '../actions/checklogin'

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }
  clicklogout = () => {
    this.props.handleChklogin(0)
    this.props.handleSetName(null)
    this.props.navigation.navigate("Login")
  }
  render () {
    var  {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
          <Image 
              style={styles.image}
              source={require('../resource/Images/Icon-menu.png')} 
            />
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={require('../resource/Images/Icon-user.png')} />
                <Body>
                  <View>
                    <Text>{this.props.name}</Text>
                  </View>
                </Body>
              </Left>
            </CardItem>
            </Card>
            <View style={styles.navSectionStyle}>
              <Button transparent>
              <Text style={styles.navItemStyle} >
              <Icon 
                name="plus-circle" 
                type="FontAwesome"
                style={{fontSize:35,marginLeft: '13%',color:'#fff'}}
              />   First-Aid
              </Text>
              </Button>
              <Button transparent>
              <Text style={styles.navItemStyle} >
              <Icon 
                name="heartbeat" 
                type="FontAwesome"
                style={{fontSize:35,marginLeft: '13%',color:'#fff'}}
              />  CPR
              </Text>
              </Button>
              <Button transparent>
              <Text style={styles.navItemStyle} >
              <Icon 
                name="heart-broken" 
                type="FontAwesome5"
                style={{fontSize:35,marginLeft: '13%',color:'#fff'}}
              />  AED
              </Text>
              </Button>
              <Button transparent>
              <Text style={styles.navItemStyle} >
              <Icon 
                name="md-chatboxes" 
                type="Ionicons"
                style={{fontSize:35,marginLeft: '13%',color:'#fff'}}
              />   Chat
              </Text>
              </Button>
              <Button transparent
                  onPress={() => navigate("History")}
              >
              <Text style={styles.navItemStyle}>
              <Icon 
                name="history" 
                type="FontAwesome"
                style={{fontSize:35,marginLeft: '13%',color:'#fff'}}
              />   History
              </Text>
              </Button>
              <Button transparent
                  onPress={this.clicklogout}
              >
              <Text style={styles.navItemStyle}>
              <Icon 
                name="log-out" 
                type="Entypo"
                style={{fontSize:33,marginLeft: '13%',color:'#fff'}}
              />  Log-out
              </Text>
              </Button>
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

const mapStateToProps = (state) =>({
  name : state.user.name
})
const mapDispatchToProps = dispatch => ({
  handleSetName: (text) => {
    dispatch(setUsername(text))
  },
  handleChklogin: (text) => {
    dispatch(checkloginfacebook(text))
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(SideMenu);