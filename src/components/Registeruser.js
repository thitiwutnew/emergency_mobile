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
import styles from '../styles/Main.style';

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
              onPress={() => navigate("Login")}
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