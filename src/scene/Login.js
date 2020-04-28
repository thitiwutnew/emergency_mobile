import React, { Component } from 'react';
import { StyleSheet,Image, ImageBackground,TextInput } from 'react-native';
import { Container, Footer, Left, Body, Right, Button,Icon, View,Form,Text,Input, Item } from 'native-base';
import FacebookCreatePF from '../components/FacebookRegister'
import FacebookLogin from '../components/FacebookLogin'
import { connect } from 'react-redux';
import { checkloginfacebook } from '../actions/at_checklogin'
import { setlocation } from '../actions/at_location'
import auth from '../model/auth'
import _ from 'lodash'
import { AsyncStorage } from 'react-native'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locations: [],
      error: null,
      email:null,
      password:null,


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
    clicklogin = async () => {
        const { email, password } =this.state
        if(email !=null && password !=null){
            let data ={
              email:email,
              password:password
            }
            let authToken = await auth.userAuth(data)
            let mustfilled = `${_.get(authToken, 'data.mustfilled')}`
            if(authToken.data.status === 401){
              this.setState({ error: authToken.data.validateMessage})
            }
            else{
              if(mustfilled ==="true"){
                this.props.handleChklogin({
                  mustfilled:mustfilled,
                  facebookid:authToken.data.idAccount,
                  profile :authToken.data.profile[0]
                })
                this.props.handleLocation(this.state.locations)
                this.props.navigation.navigate("Registeruserdata")
              }
              else if(mustfilled ==="false"){
                  AsyncStorage.setItem('userProfile', JSON.stringify(authToken.data.profile[0]), () => {
                    this.setState({ 
                      email:null,
                      password: null,
                      error: null
                    })
                  this.props.handleChklogin({
                      mustfilled:mustfilled,
                      facebookid:authToken.data.idAccount,
                      profile :authToken.data.profile[0]
                  })
                  this.props.navigation.navigate("Home")
                })
              }
          }
    }
    else{
      this.setState({ error: "กรอกข้อมูลให้ครบ."})
    }
  }
    Userregister = () =>{
      this.props.navigation.navigate("registeruser")
    }
    
 
  render() {
    let btnfbregis = <FacebookCreatePF/>
    let chk = this.props.status;
    if(chk.mustfilled ==="true"){ this.props.navigation.navigate("registerfbuser")}
    else if(chk.mustfilled ==="false"){ this.props.navigation.navigate("Home")}
    const { email, password, error } =this.state
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
                        <Input 
                          placeholder='อีเมล' 
                          value={email}
                          onChangeText={(text) => this.setState({ email: text })} 
                        />
                    </Item>
                    <Item rounded last style={styles.input}>
                        <Input 
                          placeholder='รหัสผ่าน' 
                          value={password}
                          onChangeText={(text) => this.setState({ password: text })} 
                          secureTextEntry={true}
                        />
                    </Item>
                    {
                      error !=null ? <Text style={{fontSize:15,color:'#fff'}}>{error}</Text> : null
                    }
                    <Button 
                        onPress={this.clicklogin.bind(this)}
                        rounded primary 
                        style={styles.contentbtn}>
                        <Text>   เข้าสู่ระบบ   </Text>
                    </Button>
                   <Text style={styles.hairline}>────────  หรือ  ────────</Text>
                    <FacebookLogin/>
                    <Button transparent style={styles.contentbtnforget}>
                        <Text style={{fontSize:14,color:'#fff'}}>ลืมรหัสผ่าน</Text>
                    </Button>
                    <View style={styles.view}>
                        <Text style={{fontSize:15,color:'#fff',marginBottom:5}}>ลงทะเบียน สมาชิกใหม่</Text>
                        <Button transparent onPress={this.Userregister} >
                          <Image  
                            source={require('../resource/Images/Iconregister.png')} 
                          />
                          {btnfbregis}
                        </Button>
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
  },
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
      flex:1,
      marginTop:"15%" ,
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
