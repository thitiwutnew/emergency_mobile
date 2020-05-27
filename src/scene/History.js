import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Container, Header, Left, Body, Right, Button,Icon, Content,Badge,Text,List, ListItem } from 'native-base';
import styles from '../styles/Main.style';

export default class Home extends Component {
  render() {
    var  {navigate} = this.props.navigation;
    return (
      <Container>
          <StatusBar hidden = {true}/>
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
            <Text style={styles.headertext}>Usage history</Text>
          </Body>
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
