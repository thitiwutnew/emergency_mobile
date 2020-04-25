import React, { Component } from 'react'
import { StyleSheet,Image, StatusBar, TextInput, TouchableHighlight} from 'react-native'
import { Container, Header, Item, Label, Input,Icon, Content,Text,Button, View } from 'native-base'
import { Form, Field } from 'react-native-validate-form'
import InputField from './InputField'
import InputFieldPassword from '../components/InputFieldPassword'
import { connect } from 'react-redux';
import { setUserdata } from '../actions/at_fbregister'

class Registeruser extends Component {

  constructor() {
    super();

    this.state = {
      errors: [],
      email: '',
      password:'',
      confirmpassword:'',
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

  submitSuccess() {
    const { email, password } = this.state
    let dataregister ={
      fullname:'',
      name:'',
      lastname:'',
      emailaddress: email,
      password: password,
      idcard:'',
      disease:'',
      allergy:'',
      phone:'',
      address:'',
    }
    this.props.handleUserdata(dataregister)
    this.props.navigation.navigate("registeruserdata")
  }

  submitFailed() {
    console.log("Submit Faield!")
  }

  render() {
    const required = value => (value ? undefined : 'กรุณา กรอกข้อมุล.')
    const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i.test(value) ? 'กรอก อีเมล ให้ถูกต้อง.' : undefined
    const validatepasssword = value =>(this.state.password == value ? null : 'รหัสผ่านไม่ตรงกัน')
    return (
      <Container>
          <StatusBar hidden = {true}/>
        <Header style={styles.header}>
          <Text style={styles.headertext}>ลงทะเบียนสมาชิก</Text>
        </Header>
        <Content style={styles.container}>
          <View style={styles.textheader}> 
            <Icon 
              name="user" 
              type="FontAwesome"
              style={{fontSize:25,color:'#FFF'}}
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
              <Text style={styles.textbtnconfirm}>ถัดไป</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleUserdata: (text) => {
    dispatch(setUserdata(text))
  }
})
export default connect(null,mapDispatchToProps)(Registeruser);


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
    marginTop:"7%",
    marginLeft:"3%",
    width:"40%",
    color:"#FFF",
    padding:10,
    fontSize:20,
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
    width:"90%",
    marginLeft:"5%"
  },
  textbtnconfirm:{
    marginTop:10,
    fontSize:18,
    fontWeight:"900",
  },
  btnconfirm:{
    paddingTop:-50,
    alignSelf:'center',
    marginTop:"15%",
    width:"50%",
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
  }
});
