import React, { Component } from 'react';
import { StyleSheet,Image, StatusBar} from 'react-native';
import { Container, Header, Textarea, Label, Input,Icon, Content,Text,Button, View, Thumbnail, Item } from 'native-base';
import { Form, Field } from 'react-native-validate-form'
import InputField from '../components/InputField'
import InputFieldIdcard from '../components/InputFieldIdcard'
import InputFieldTel from '../components/InputFieldTel'
import { setUserdata } from '../actions/at_fbregister'
import { connect } from 'react-redux';
import user from '../model/user'
import { Dialog } from 'react-native-simple-dialogs';
import { checkloginfacebook } from '../actions/at_checklogin'
import { AsyncStorage } from 'react-native'

class profile extends Component {
  constructor() {
    super();

    this.state = {
      errors: [],
      id:'',
      name: '',
      lastname:'',
      idcard:'',
      tel:'',
      disease:'',
      allergy:'',
      address:'',
      dialogVisible:false,
      statuscreateprofile:null,
    }
  }
  async componentDidMount(){
    let userprofiles = await AsyncStorage.getItem('userProfile')
    let userJSON = JSON.parse(userprofiles)
    this.setState({
      profile: userJSON,
      fullname: userJSON.fullname,
      name: userJSON.name,
      lastname: userJSON.lastname,
      idcard: userJSON.idcard,
      tel: userJSON.phone,
      disease: userJSON.disease,
      allergy: userJSON.allergy,
      address: userJSON.address,
      id:userJSON._id,
    })
 
  }

  render() {
    var  {navigate} = this.props.navigation;
    const required = value => (value ? undefined : 'กรุณา กรอกข้อมุล.')
    const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i.test(value) ? 'กรอก อีเมล ให้ถูกต้อง.' : undefined
    const validatepasssword = value =>(this.state.password == value ? null : 'รหัสผ่านไม่ตรงกัน')
    return (
      <Container>
          <StatusBar hidden = {true}/>
        <Header style={styles.header}>
          <Text style={styles.headertext}>ข้อมูลสมาชิก</Text>
        </Header>
        <Content style={styles.container}>
          <Thumbnail square large style={styles.imagepf} source={require('../resource/Images/avatar.png')} />
          <View style={styles.textheader}> 
            <Icon 
              name="address-book" 
              type="FontAwesome"
              style={{fontSize:20,color:'#FFF'}}
            >
              <Text style={{fontSize:18,color:'#FFF'}}>  ข้อมูลส่วนตัว</Text>
            </Icon>
          </View>
          <Form  
            style={styles.form}
          >
              <Item disabled>
                <Icon 
                  name="id-card" 
                  type="FontAwesome"
                  style={{fontSize:20,color:'#000'}}
                />
                <Input disabled >ชื่อ : {this.state.name}     นามสกุล : {this.state.lastname}</Input>
              </Item>
              <Item disabled>
                <Icon 
                  name="map-marker" 
                  type="FontAwesome"
                  style={{fontSize:30,color:'#000',marginLeft:4}}
                ></Icon>
                 <Input disabled >ที่อยู่ปัจจุบัน </Input>
              </Item>
              <Item disabled>
                 <Input disabled > {this.state.address}   </Input>
              </Item>
              <Item disabled>
                <Icon 
                  name="id-badge" 
                  type="FontAwesome"
                  style={{fontSize:20,color:'#000',marginLeft:5}}
                />
                <Input disabled >เลขประจำตัวประชาชน : {this.state.idcard}   </Input>
              </Item>
              <Item disabled>
                <Icon 
                  name="phone-square" 
                  type="FontAwesome"
                  style={{fontSize:20,color:'#000',marginLeft:2}}
                />
                <Input disabled >เบอร์โทรศัพท์ : {this.state.tel}   </Input>
              </Item>
              <Item disabled>
                <Icon 
                  name="heartbeat" 
                  type="FontAwesome"
                  style={{fontSize:20,color:'#000',marginLeft:1}}
                />
                <Input disabled >โรคประจำตัว : {this.state.disease}   </Input>
              </Item>
              <Item disabled>
                <Icon 
                  name="bolt" 
                  type="FontAwesome"
                  style={{fontSize:20,color:'#000',marginLeft:7}}
                />
                <Input disabled >การแพ้ยา : {this.state.allergy}   </Input>
              </Item>
          </Form>
          <View style={{flexDirection: "row",alignSelf:'center',marginTop:'10%',marginBottom:'10%'}}>
            <Button  
              style={{marginRight:10,borderRadius:7,}}
              onPress={() => this.props.navigation.navigate("editprofile")}
            >
              <Text style={styles.textbtnconfirm}>แก้ไขข้อมูล</Text>
            </Button>
            <Button light 
              style={{borderRadius:7,}}
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <Text style={styles.textbtnconfirm}>ย้อนกลับ</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) =>({
  dataprofile : state.Userdata.userdata,
  idfacebook : state.checklogin.chklogin,
})

const mapDispatchToProps = dispatch => ({
  handleUserdata: (text) => {
    dispatch(setUserdata(text))
  },
  handleChklogin: (text) => {
    dispatch(checkloginfacebook(text))
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(profile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
},
  header :{
    backgroundColor:'#405273',
  },
  headertext :{
      marginTop:"3%",
      fontSize:20,
      color:'#fff',
      display:'flex',
      fontWeight:'bold',
      justifyContent:'center',
  },
  textheader:{
    marginTop:"2%",
    marginLeft:"3%",
    width:"36%",
    color:"#FFF",
    padding:6,
    fontSize:18,
    backgroundColor:"#2574a9",
    fontWeight:"900",
    borderColor:"#2574a9",
    borderWidth:1,
    borderRadius:10,
  },
  form:{
    marginTop:20,
    color:"#000",
    fontSize:18,
    width:"92%",
    marginLeft:"4%",
    borderWidth:1,
    padding:5,
    borderRadius:7,
  },
  textbtnconfirm:{
    fontSize:18,
    fontWeight:"900",
  },
  btnconfirm:{
    paddingTop:"6%",
    marginTop:"10%",
    width:"40%",
    borderRadius:7,
  },
  btnback:{
    alignSelf:'center',
    paddingTop:"6%",
    width:"40%",
    marginBottom:40,
    borderRadius:7,
  },
  input:{
    width:"90%",
    fontSize:15,
    marginLeft:"5%",
    marginTop:0,
    borderRadius:7,
    borderColor:"#2574a9",
    borderWidth:2,
    padding:7,
 },
 alert:{
   flex:1,
   fontWeight:"900",
 },
 alertbody:{
   alignSelf:'center',
   justifyContent:'center',
   fontSize:18,
   fontWeight:"bold",
 },
 Dialogfooter:{
  width:"60%",
  marginTop:20,
  padding:5,
  backgroundColor:'#4285f4',
  alignSelf: "center",
  },
  btndirect:{
    padding:5,
    justifyContent: "center",
    backgroundColor:'#4285f4',
    width:"100%",
    fontSize:18,
  },
  imagepf:{
    marginTop:'7%',
    alignSelf:'center',
    marginBottom:'5%',
  }
});
