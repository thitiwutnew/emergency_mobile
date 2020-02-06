import React, { Component } from 'react';
import { StyleSheet,Image, ImageBackground } from 'react-native';
import { Container, Footer, Left, Body, Right, Button,Icon, View,Form,Text,Input, Item } from 'native-base';
import Icons from 'react-native-vector-icons/FontAwesome';
import MenuDrawer from 'react-native-side-drawer'

export default class Home extends Component {
  render() {
    var  {navigate} = this.props.navigation;
    return (
      <Container>
            <ImageBackground 
            style={{height:'100%'}}
                source={require('../resource/Images/bg-login.png')}
            >
                <Image  
                    style={styles.imagelogo}
                    source={require('../resource/Images/Logo-login.png')} 
                />
                <Form style={styles.contentform}>
                    <Item rounded last style={styles.input}>
                        <Input  placeholder='Username' />
                    </Item>
                    <Item rounded last style={styles.input}>
                        <Input placeholder='Password '/>
                    </Item>
                    <Button rounded primary style={styles.contentbtn}>
                        <Text>   sign in   </Text>
                    </Button>
                    <Button transparent style={styles.contentbtnforget}>
                        <Text style={{fontSize:10,color:'#fff'}}>forget password</Text>
                    </Button>
                    <View style={styles.view}>
                        <Text style={{fontSize:13,color:'#fff'}}>Don't Have Account ?</Text>
                        <Button transparent >
                        <Icon 
                            name="facebook-square"
                            type="FontAwesome"
                            style={{color:'#4267b2',fontSize:30}}
                        />
                        </Button>
                    </View>
                </Form>
            </ImageBackground>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#5e697d',
},
    contentbtn: {
    marginTop:20,
    alignSelf:'center',
    padding:25,
    color: '#fff',
    fontWeight: 'bold',
  },
  contentbtnforget: {
    margin:5,
    marginBottom:'50%',
    alignSelf:'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: Platform.OS === 'ios' ? 35 : 18,
  },
  imagelogo:{
    display:'flex',
    margin:50,
    alignSelf:'center'
  },
  contentform :{
      alignSelf:'center',
    width:'80%',
  },
  input:{
    backgroundColor:'#fff',
    marginBottom:10,
  },
  footer:{
      display:'flex',
  },
  view:{
      alignItems:'center'
  }
});
