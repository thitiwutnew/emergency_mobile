import React, { Component } from 'react';
import { StyleSheet,Image, StatusBar} from 'react-native';
import { Container, Header, Footer, Label, Input,Icon, Content,Text,Button, View } from 'native-base';
import { Form, Field } from 'react-native-validate-form'
import InputField from './InputField'
import InputFieldIdcard from './InputFieldIdcard'
import InputFieldTel from './InputFieldTel'
import { setUserdata } from '../actions/at_fbregister'
import { connect } from 'react-redux';
import user from '../model/user'
import { Dialog } from 'react-native-simple-dialogs';
import { checkloginfacebook } from '../actions/at_checklogin'
import { AsyncStorage } from 'react-native'
import styles from '../styles/Main.style';

class Registeruserdata extends Component {
  constructor() {
    super();

    this.state = {
      errors: [],
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


  submitForm() {
    let submitResults = this.myForm.validate()

    let errors = [];

    submitResults.forEach(item => {
      errors.push({ field: item.fieldName, error: item.error })
    });
    this.setState({ errors: errors });
  }

  async submitSuccess() {
    const data = this.props.dataprofile
    if(data.password==="" || data.emailaddress ===""){
      this.props.navigation.navigate("Login")
    }
    const iduser = this.props.datauser
    const { name, lastname, tel, disease, allergy, address } = this.state
    let profile = {
      fullname: name+' '+lastname,
      name: name,
      lastname: lastname,
      emailaddress: data.emailaddress,
      password: data.password,
      idcard: iduser.profile.idcard,
      disease: disease,
      allergy: allergy,
      phone: tel,
      address:address,
    }
    let response = await user.updateprofile(profile, iduser.facebookid)
    if(response.status==200){
      AsyncStorage.setItem('userProfile', JSON.stringify(profile), () => {
        this.props.handleUserdata(profile)
        this.setState({dialogVisible: true,statuscreateprofile:true})
      })
    }
    else{
      AsyncStorage.setItem('userProfile', JSON.stringify(""), () => {
        this.props.handleUserdata(profile)
        this.setState({dialogVisible: true,statuscreateprofile:false})
      })
    }
  }

  submitFailed() {
  }

  async submitcreateprofile(value){
        if(value===1){
          this.props.navigation.navigate("Home")
        }
        else{
          this.props.navigation.navigate("Login")
          this.props.handleChklogin(0)
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
          <Text style={styles.headertextregis}>ลงทะเบียนสมาชิก</Text>
        </Header>
        <Content style={styles.container}>
        <View style={styles.textheaderprofile}> 
            <Text style={{fontSize:18,color:'#FFF',padding:10}}>
              <Icon 
              name="address-book" 
              type="FontAwesome"
              style={{fontSize:20,color:'#FFF'}}
              >
              </Icon>  ข้อมูลส่วนตัว</Text>
          </View>
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
                            this.submitcreateprofile(1),
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
                              this.submitcreateprofile(2),
                              this.setState({dialogVisible: false})
                            }}
                        >
                          <Text>ตกลง</Text>
                        </Button>
                    </Footer>
                  </View>
                </Dialog>
          }
          <Form  
            style={styles.form}
            ref={(ref) => this.myForm = ref}
            validate={true}
            submit={this.submitSuccess.bind(this)}
            failed={this.submitFailed.bind(this)}
            errors={this.state.errors}
          >
              <Label style={styles.form}>ชื่อ :</Label>
              <Field
                  required
                  component={InputField}
                  validations={[required]}
                  name="name"
                  value={this.state.name}
                  onChangeText={val => this.setState({ name: val })}
                  customStyle={styles.input}
                  placeholder="กรอก ชื่อ"
              />
              <Label style={styles.form}>นามสกุล :</Label>
              <Field
                  required
                  secureTextEntry
                  component={InputField}
                  validations={[required]}
                  name="lastname"
                  value={this.state.lastname}
                  onChangeText={val => this.setState({ lastname: val })}
                  customStyle={styles.input}
                  placeholder="กรอก นามสกุล"
              />
               <Label style={styles.form}>ที่อยู่ปัจจุบัน :</Label>
              <Field
                  required
                  secureTextEntry={true}
                  component={InputField}
                  validations={[required]}
                  name="address"
                  value={this.state.address}
                  onChangeText={val => this.setState({ address: val })}
                  customStyle={styles.input}
                  placeholder="กรอก ที่อยู่ปัจจุบัน"
              />
               <Label style={styles.form}>เบอร์โทรศัพท์ :</Label>
              <Field
                  required
                  secureTextEntry={true}
                  component={InputFieldTel}
                  validations={[required]}
                  name="tel"
                  value={this.state.tel}
                  onChangeText={val => this.setState({ tel: val })}
                  customStyle={styles.input}
                  placeholder="กรอก เบอร์โทรศัพท์"
              />
               <Label style={styles.form}>โรคประจำตัว :</Label>
              <Field
                  required
                  secureTextEntry={true}
                  component={InputField}
                  validations={[required]}
                  name="disease"
                  value={this.state.disease}
                  onChangeText={val => this.setState({ disease: val })}
                  customStyle={styles.input}
                  placeholder="กรอก โรคประจำตัว"
              />
               <Label style={styles.form}>การแพ้ยา :</Label>
              <Field
                  required
                  secureTextEntry={true}
                  component={InputField}
                  validations={[required]}
                  name="allergy"
                  value={this.state.allergy}
                  onChangeText={val => this.setState({ allergy: val })}
                  customStyle={styles.input}
                  placeholder="กรอก การแพ้ยา"
              />
             <View style={{flexDirection: "row",alignSelf:'center',marginTop:'10%',marginBottom:'10%'}}>
                <Button  success 
                    style={{marginRight:10,borderRadius:7,}}
                    onPress={this.submitForm.bind(this)}
                >
                <Text style={styles.textbtnconfirm}>บันทึกข้อมูล</Text>
                </Button>
              </View>
          </Form>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) =>({
  dataprofile : state.Userdata.userdata,
  datauser : state.checklogin.chklogin,
})

const mapDispatchToProps = dispatch => ({
  handleUserdata: (text) => {
    dispatch(setUserdata(text))
  },
  handleChklogin: (text) => {
    dispatch(checkloginfacebook(text))
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(Registeruserdata);

