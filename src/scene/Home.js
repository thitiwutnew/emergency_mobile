import React, { Component } from 'react';
import { StyleSheet,Image, View} from 'react-native';
import { Container, Header, Left, Body, Right, Button,Icon, Content,Badge,Text,Footer, FooterTab } from 'native-base';
import Icons from 'react-native-vector-icons/FontAwesome';
export default class HeaderMultipleIconExample extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Button transparent>
              <Icon name='menu' />
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

        <Content>
        </Content>
        <View style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: '#fff'

            }}>
                <View style={{ position: 'absolute', alignSelf: 'center', backgroundColor: '#fff', width: 100, height: 100, borderRadius: 65, bottom: 25, zIndex: 10 }}>
                    <Icon
                        name='call'
                        type='material'
                        color='#f00'
                        containerStyle={{ alignSelf: 'center' }}
                        reverse
                        size={28}
                        onPress={() => {}}
                    />
                </View>
                <View style={{ position: 'absolute', backgroundColor: '#f03b42', bottom: 0, zIndex: 1, width: '100%', height: 60, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, paddingVertical: 10 }}>
                    <Icons
                        name='bell'
                        type='material'
                        color='#fff'
                        onPress={() => {}}

                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Icons
                            name='bell'
                            type='material'
                            color='#fff'
                            onPress={() => {}}
                            containerStyle={{ marginHorizontal: 16 }}
                        />
                    </View>
                </View>
            </View>
        {/* <Footer>
          <FooterTab  style={styles.footer}>
            <Button 
                style={{
                  width:'40%',
                }}
            >
              <Icon name="camera" />
            </Button>
            
            <Button transparent>
            <ImageBackground 
              style={styles.imageheader}
              source={require('../resource/Images/circle.png')} 
            >
               <Icon style={{fontSize:50,color:'red',paddingTop:20,paddingTop:-5}} name="call"/>
            </ImageBackground>
            </Button>
            <Button 
                style={{
                  color:'#fff',
                  width:'40%',
                }}
            >
              <Icon  name="chatboxes" />
            </Button>
          </FooterTab>
        </Footer> */}
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  bigBlue: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: Platform.OS === 'ios' ? 35 : 32,
    paddingLeft:-2,
  },
  alart: {
    position: 'absolute',
    width:'110%',
    borderRadius:100,
    height:25,
    paddingRight:1,
    paddingLeft:1,
    top: 2, 
    right: 2,
  },
  header :{
    backgroundColor:'#5e697d',
    height: Platform.OS === 'ios' ? 100 : 60,
    marginTop: Platform.OS === 'ios' ? null : 24,
  },
  imageheader :{
    height: Platform.OS === 'ios' ? '100%' : 50,
    width: Platform.OS === 'ios' ? 150 : '100%',
  },
  footer :{
    backgroundColor:'#f03b42',
    color:'#fff',
    marginTop: Platform.OS === 'ios' ? -11 : -20,
  }
});
