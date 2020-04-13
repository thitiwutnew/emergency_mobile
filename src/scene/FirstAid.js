import React, { Component } from 'react';
import { StyleSheet,Image, StatusBar} from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Left, Button, Body, Right, ScrollableTab  }from 'native-base';
import Icons from 'react-native-vector-icons/FontAwesome';
import MenuDrawer from 'react-native-side-drawer'
import Datatotal from './Ducument/DucumentTotal'
import Datafirstaid from './Ducument/Firstaid'
import Datamedical from './Ducument/Medicalknowledge'
import Dataalternative from './Ducument/Alternativemedicine'
export default class Home extends Component {
  render() {
    var  {navigate} = this.props.navigation;
    return (
        <Container style={styles.container}>
        <StatusBar hidden = {true}/>
        <Header hasTabs style={styles.header}>
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
      marginTop: Platform.OS === 'ios' ? null : 0,
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
  