import React, { Component } from 'react'
import { StyleSheet,Image, StatusBar, TextInput, TouchableHighlight} from 'react-native'
import { Container, Header, Footer, Label, Input,Icon, Content,Text,Button, View,Left, Body } from 'native-base'
import { Form, Field } from 'react-native-validate-form'
import InputField from './InputField'
import InputFieldIdcard from './InputFieldIdcard'
import InputFieldPassword from './InputFieldPassword'
import { connect } from 'react-redux';
import { setUserdata } from '../actions/at_fbregister'
import user from '../model/user'
import { Dialog } from 'react-native-simple-dialogs';

class Registeruser extends Component {

  constructor() {
    super();

    this.state = {
      errors: [],
      email: '',
      password:'',
      idcard:'',
      confirmpassword:'',
      dialogVisible:false,
      statuscreateprofile:null,
    }
  }

  submitForm() {
    let submitResults = this.myForm.validate()

    let errors = [];

    submitResults.forEach(item => {
      errors.push({ field: item.fieldName, error: item.error })
    });
    this.setState({ errors: errors });
  }

  async submitSuccess() {
    const { email, password, idcard } = this.state
    let dataregister ={
        email: email,
        password: password,
        idcard: idcard,
    }
    let response = await user.registeraccount(dataregister)
    if(response.status===200){
        this.setState({dialogVisible: true,statuscreateprofile:true})
    }
    else{
        this.setState({dialogVisible: true,statuscreateprofile:false})
    }
  }

  submitFailed() {
    
  }

  async submitcreateaccount(value){
    if(value===1){
      this.props.navigation.navigate("Login")
    }
    else{
      this.props.navigation.navigate("Login")
    }
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
          <Left style={{marginLeft:Platform.OS === 'ios' ? 20 : 0,}}>
            {
                Platform.OS === 'ios' ?  <Button transparent 
                onPress={() => navigate("Login")}
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
            <Text style={styles.headertext}>ลงทะเบียนสมาชิก</Text>
          </Body>
        </Header>
        <Content style={styles.container}>
          <View style={styles.textheader}> 
            <Icon 
              name="user" 
              type="FontAwesome"
              style={{fontSize:20,color:'#FFF'}}
            >
              <Text style={{fontSize:18,color:'#FFF'}}>  ข้อมูลผู้ใช้งาน</Text>
            </Icon>
          </View>
          <Form  
            style={styles.form}
            ref={(ref) => this.myForm = ref}
            validate={true}
            submit={this.submitSuccess.bind(this)}
            failed={this.submitFailed.bind(this)}
            errors={this.state.errors}
          >
              <Label style={styles.form}>อีเมล :</Label>
              <Field
                  required
                  component={InputField}
                  validations={[required, email]}
                  name="email"
                  value={this.state.email}
                  onChangeText={val => this.setState({ email: val })}
                  customStyle={styles.input}
                  placeholder="กรอก อีเมล"
              />
               <Label style={styles.form}>เลขประจำตัวประชาชน :</Label>
              <Field
                  required
                  secureTextEntry
                  component={InputFieldIdcard}
                  validations={[required]}
                  name="idcard"
                  value={this.state.idcard}
                  onChangeText={val => this.setState({ idcard: val })}
                  customStyle={styles.input}
                  placeholder="กรอก เลขประจำตัวประชาชน"
              />
              <Label style={styles.form}>รหัสผ่าน :</Label>
              <Field
                  required
                  secureTextEntry
                  component={InputFieldPassword}
                  validations={[required]}
                  name="password"
                  value={this.state.password}
                  onChangeText={val => this.setState({ password: val })}
                  customStyle={styles.input}
                  placeholder="กรอก รหัสผ่าน"
              />
              <Label style={styles.form}>ยืนยันรหัสผ่าน :</Label>
              <Field
                  required
                  secureTextEntry={true}
                  component={InputFieldPassword}
                  validations={[required, validatepasssword]}
                  name="confirmpassword"
                  value={this.state.confirmpassword}
                  onChangeText={val => this.setState({ confirmpassword: val })}
                  customStyle={styles.input}
                  placeholder="กรอก รหัสผ่าน"
              />
            <Button block success 
                style={styles.btnconfirm}
                onPress={this.submitForm.bind(this)}
            >
              <Text style={styles.textbtnconfirm}>สมัครสมาชิก</Text>
            </Button>
          </Form>
          {
            this.state.statuscreateprofile === true ? 
                <Dialog
                  style={styles.alert}
                  title="การแจ้งเตือน"
                  visible={this.state.dialogVisible}
                  onTouchOutside={() => this.setState({dialogVisible: false})}
                >
                <View style={{height: Platform.OS === 'ios' ? null : "13%",}}>
                    <Text style={styles.alertbody}>ลงทะเบียนสมาชิก สำเร็จ !!!</Text>
                  <Footer style={styles.Dialogfooter}>
                    <Button 
                          style={styles.btndirect}
                          onPress={() => {
                            this.submitcreateaccount(1),
                            this.setState({dialogVisible: false})
                          }}
                      >
                        <Text>ตกลง</Text>
                      </Button>
                  </Footer>
                </View>
                </Dialog> : 
                <Dialog
                  style={styles.alert}
                  title="การแจ้งเตือน"
                  visible={this.state.dialogVisible}
                  onTouchOutside={() => this.setState({dialogVisible: false})}
                >
                  <View style={{height: Platform.OS === 'ios' ? null : "13%",}}>
                      <Text style={styles.alertbody}>ลงทะเบียนสมาชิก ไม่สำเร็จ !!!</Text>
                    <Footer style={styles.Dialogfooter}>
                      <Button 
                            style={styles.btndirect}
                            onPress={() => {
                              this.submitcreateaccount(2),
                              this.setState({dialogVisible: false})
                            }}
                        >
                          <Text>ตกลง</Text>
                        </Button>
                    </Footer>
                  </View>
                </Dialog>
          }
        </Content>
      </Container>
    );
  }
}

export default connect(null,null)(Registeruser);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
},
  header :{
      backgroundColor:'#405273',
      height: Platform.OS === 'ios' ? 80 : 60,
      marginTop: Platform.OS === 'ios' ? null : 0,
  },
  headertext :{
    alignSelf:'center',
    marginLeft:Platform.OS === 'ios' ? "-105%" : "-40%",
    fontSize:20,
    color:'#fff',
    display:'flex',
    fontWeight:'bold',
  },
  textheader:{
    marginTop:"7%",
    marginLeft:"3%",
    width:"40%",
    color:"#FFF",
    padding:10,
    backgroundColor:"#2574a9",
    fontWeight:"900",
    borderColor:"#2574a9",
    borderWidth:1,
    borderRadius:10,
    paddingBottom:10,
    height: Platform.OS === 'ios' ? 57 : null,
  },
  form:{
    marginTop:20,
    color:"#000",
    fontSize:18,
    width:"90%",
    marginLeft:"5%"
  },
  textbtnconfirm:{
    color:'#FFF',
    marginTop:10,
    fontSize:18,
    fontWeight:"900",
  },
  btnconfirm:{
    alignSelf:'center',
    marginTop:"10%",
    paddingTop:Platform.OS === 'ios' ? null : 2,
    width:"50%",
    borderRadius:7,
  },
  texterror:{
    color:"red",
    fontSize:13,
    marginLeft:"5%"
  },
  input:{
     width:"90%",
     fontSize:15,
     marginLeft:"5%",
     marginTop:5,
     borderRadius:7,
     borderColor:"#2574a9",
     borderWidth:2,
     padding:7,
  },
  alertbody:{
    alignSelf:'center',
    justifyContent:'center',
    fontSize:18,
    fontWeight:"bold",
  },
  Dialogfooter:{
    alignSelf:'center',
    marginTop:15,
    borderRadius:5,
    height:10,
    backgroundColor:'#fff',
   },
   btndirect:{
    padding:5,
    justifyContent: "center",
    backgroundColor:'#4285f4',
    width:"50%",
   },
});
