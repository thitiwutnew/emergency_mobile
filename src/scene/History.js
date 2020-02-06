import React, { Component } from 'react';
import { StyleSheet,Image, View} from 'react-native';
import { Container, Header, Left, Body, Right, Button,Icon, Content,Badge,Text,List, ListItem } from 'native-base';
import Icons from 'react-native-vector-icons/FontAwesome';
import MenuDrawer from 'react-native-side-drawer'

export default class Home extends Component {
  render() {
    var  {navigate} = this.props.navigation;
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            {
                Platform.OS === 'ios' ?  <Button transparent 
                onPress={() => navigate("Home")}
              >
                <Icon 
                  name='ios-arrow-back' 
                  type="Ionicons"
                  style={{color:'#fff'}} 
              />
              </Button> :  <Button transparent 
              onPress={() => navigate("Home")}
            >
              <Icon 
                name='md-arrow-back' 
                type="Ionicons"
                style={{color:'#fff'}} 
            />
            </Button> 
            }
          </Left>
          <Body>
            <Text style={styles.headertext}>History</Text>
          </Body>
          <Right>
         
          </Right>
        </Header>
        <Content style={styles.container}>
            <List>
                <ListItem>
                    <Text>Dejan Lovren</Text>
                </ListItem> 
                <ListItem>
                    <Text>Dejan Lovren</Text>
                </ListItem>
                <ListItem>
                    <Text>Dejan Lovren</Text>
                </ListItem> 
                <ListItem>
                    <Text>Dejan Lovren</Text>
                </ListItem> 
                <ListItem>
                    <Text>Dejan Lovren</Text>
                </ListItem>
            </List>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
},
  bigBlue: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: Platform.OS === 'ios' ? 35 : 30,
  },
  alart: {
    position: 'absolute',
    width: Platform.OS === 'ios' ? '110%' : 33,
    borderRadius:100,
    height:25,
    paddingRight:1,
    paddingLeft:-2,
    top: 2, 
    right: 2,
  },
  header :{
    backgroundColor:'#5e697d',
    height: Platform.OS === 'ios' ? 100 : 60,
    marginTop: Platform.OS === 'ios' ? null : 24,
  },
  imageheader :{
    height: Platform.OS === 'ios' ? '100%' : 40,
    width: Platform.OS === 'ios' ? 150 : '100%',
  },
  footer :{
    backgroundColor:'#f03b42',
    color:'#fff',
    marginTop: Platform.OS === 'ios' ? -11 : -20,
  },
  headertext :{
      fontSize:20,
      color:'#fff',
      display:'flex',
      fontWeight:'bold',
  }
});
