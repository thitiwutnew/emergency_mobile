import React, { Component } from 'react';
import { Image, ImageBackground } from 'react-native';
import { Container, Button, View,Form,Text,Input, Item } from 'native-base';
import FacebookCreatePF from '../components/FacebookRegister'
import FacebookLogin from '../components/FacebookLogin'
import { connect } from 'react-redux';
import { checkloginfacebook } from '../actions/at_checklogin'
import { setlocation } from '../actions/at_location'
import auth from '../model/auth'
import _ from 'lodash'
import { AsyncStorage } from 'react-native'
import styles from '../styles/Main.style';

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
                this.setState({ 
                  email:null,
                  password: null,
                  error: null
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
                    <Item rounded last style={styles.inputlogin}>
                        <Input 
                          placeholder='อีเมล' 
                          value={email}
                          onChangeText={(text) => this.setState({ email: text })} 
                        />
                    </Item>
                    <Item rounded last style={styles.inputlogin}>
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
                        <Text style={styles.textregister}>ลงทะเบียนสมาชิก</Text>
                        <Button transparent onPress={this.Userregister} >
                          <Image  
                            style={{ color: '#0d8bf0', width: Platform.OS === 'ios' ? 35 : 40 }}
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

