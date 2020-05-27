import React, { Component } from 'react';
import { StatusBar} from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Left, Button, Body, Right, ScrollableTab  }from 'native-base';
import Datafirstaid from './Ducument/Firstaid'
import Datamedical from './Ducument/Medicalknowledge'
import Dataalternative from './Ducument/Alternativemedicine'
import styles from '../styles/Main.style';

export default class Home extends Component {
  render() {
    var  {navigate} = this.props.navigation;
    return (
        <Container style={styles.container}>
        <StatusBar hidden = {true}/>
        <Header hasTabs style={styles.header}>
          <Left style={{marginLeft:Platform.OS === 'ios' ? 20 : 0,}}>
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
            <Text style={styles.headertext}>First-Aid & Learning</Text>
          </Body>
        </Header>
        <Tabs renderTabBar={()=> <ScrollableTab />}>
          {/* <Tab heading={ <TabHeading><Text>ทั้งหมด</Text></TabHeading>}>
            <Datatotal />
          </Tab> */}
          <Tab heading={ <TabHeading><Text>ปฐมพยาบาล</Text></TabHeading>}>
            <Datafirstaid/>
          </Tab>
          <Tab heading={ <TabHeading><Text>ความรู้ทางการแพทย์</Text></TabHeading>}>
            <Datamedical/>
          </Tab>
          <Tab heading={ <TabHeading><Text>แพทย์ทางเลือก</Text></TabHeading>}>
            <Dataalternative />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

  