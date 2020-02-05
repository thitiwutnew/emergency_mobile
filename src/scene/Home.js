import React, { Component } from 'react';
import { StyleSheet,Image, View} from 'react-native';
import { Container, Header, Left, Body, Right, Button,Icon, Content,Badge,Text,Footer, FooterTab } from 'native-base';
import Icons from 'react-native-vector-icons/FontAwesome';
import MenuDrawer from 'react-native-side-drawer'

export default class Home extends Component {
  render() {
    var  {navigate} = this.props.navigation;
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Button transparent 
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name='menu' style={{color:'#fff'}} />
            </Button>
          </Left>
          <Body>
          <Image 
            style={styles.imageheader}
            source={require('../resource/Images/Icon-header.png')} />
          </Body>
          <Right>
          <Button transparent active badge vertical>
              <Icons style={styles.bigBlue} name="bell" />
              <Badge style={styles.alart}><Text style={{fontSize:15}}>999</Text></Badge>
            </Button>
          </Right>
        </Header>
        <Content style={styles.container}>

        </Content>
        <Footer>
        <View style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: '#49536e'

            }}>
                <View style={{ position: 'absolute', alignSelf: 'center', backgroundColor: '#fff', width: 110, height: 110, borderRadius: 65, bottom: 15, zIndex: 10,padding:'17%',paddingTop:30,borderWidth:3,borderColor:'#acacac' }}>
                  <Button transparent>
                    <Icon
                        name='ios-call'
                        type='Ionicons'
                        color='#f00'
                        containerStyle={{ alignSelf: 'center' }}
                        style={{fontSize:50,color:'red'}}
                        reverse
                        onPress={() => {}}
                    />
                  </Button>
                </View>
                <View style={{ position: 'absolute', backgroundColor: '#f03b42', bottom: 0, zIndex: 1, width: '100%', height: 60, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, paddingVertical: 10 }}>
                    <Button transparent>
                    <Icon
                        name='camera'
                        color='#fff'
                        style={{fontSize:35,marginLeft: '13%',color:'#fff'}}
                        onPress={() => {}}

                    />
                    </Button>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                       <Button transparent>
                       <Icon
                            name='chatboxes'
                            color='#fff'
                            style={{fontSize:35,marginRight: '20%',color:'#fff'}}
                            onPress={() => {}}
                            containerStyle={{ marginHorizontal: 16 }}
                        />
                       </Button>
                    </View>
                </View>
            </View>
            </Footer>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#414c68',
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
  }
});
