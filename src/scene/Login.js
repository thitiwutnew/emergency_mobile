import React, { Component } from 'react';
import { StyleSheet,Image, ImageBackground,Alert } from 'react-native';
import { Container, Footer, Left, Body, Right, Button,Icon, View,Form,Text,Input, Item } from 'native-base';
import FacebookLogin from '../components/FacebookLogin'
import { connect } from 'react-redux';
import { checkloginfacebook } from '../actions/at_checklogin'
import { setlocation } from '../actions/at_location'
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locations: [],
      error: null,


    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
       (position) => {
         this.setState({
          locations: [
            {
              title: 'ตำแหน่งปัจจบัน',
              latlng: {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              },
            },
          ]
         })
       },
       (error) => this.setState({ error: error.message }),
       { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
     );
   }

  clicklogout =()=>{
    let chk =1; 
    this.props.handleChklogin(chk)
    this.props.handleLocation(this.state.locations)
  }

  render() {
    var  {navigate} = this.props.navigation;
    let chk = this.props.status;
    if(chk =="1"){ this.props.navigation.navigate("Home")}
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
                    <Button 
                        onPress={this.clicklogout}
                        rounded primary 
                        style={styles.contentbtn}>
                        <Text>   sign in   </Text>
                    </Button>
                   <Text style={styles.hairline}>────────  OR  ────────</Text>
                   <Button transparent style={styles.btnfacebook}>
                        <Text style={{fontSize:15,color:'#fff'}}>Login with Facebook</Text>
                    </Button>
                    <Button transparent style={styles.contentbtnforget}>
                        <Text style={{fontSize:12,color:'#fff'}}>forget password</Text>
                    </Button>
                    <View style={styles.view}>
                        <Text style={{fontSize:15,color:'#fff'}}>Don't Have Account ?</Text>
                        <FacebookLogin />
                    </View>
                </Form>
            </ImageBackground>
      </Container>
    );
  }
}

const mapStateToProps = (state) =>({
  status : state.checklogin.chklogin
})
const mapDispatchToProps = dispatch => ({
  handleChklogin: (text) => {
    dispatch(checkloginfacebook(text))
  },
  handleLocation: (text) => {
    dispatch(setlocation(text))
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#5e697d',
},
    contentbtn: {
    marginTop:10,
    alignSelf:'center',
    padding:25,
    color: '#fff',
    fontWeight: 'bold',
  },
  contentbtnforget: {
    marginTop:"2%",
    alignSelf:'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: Platform.OS === 'ios' ? 35 : 18,
  },
  imagelogo:{
    display:'flex',
    margin:"10%",
    alignSelf:'center'
  },
  contentform :{
    alignSelf:'center',
    alignItems:'center',
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
      marginTop:"20%" ,
      alignItems:'center'
  },
  hairline: {
    marginTop:10,
    padding:10,
    fontWeight:"900",
    fontSize:20,
    color:"#FFF",
  },
  btnfacebook: {
    marginTop:10,
    justifyContent:"center",
    borderRadius:7,
    backgroundColor:"#0d8bf0",
    width:"75%",
  },
});
