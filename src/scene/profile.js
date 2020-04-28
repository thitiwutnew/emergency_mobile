import React, { Component } from 'react';
import { StyleSheet,Image, StatusBar} from 'react-native';
import { Container, Header, Footer, Label, Input,Icon, Content,Text,Button, View } from 'native-base';
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
    const { name, lastname, idcard, tel, disease, allergy, address,id } = this.state
    let profile = {
      _id: id,
      fullname: name+' '+lastname,
      name: name,
      lastname: lastname,
      idcard: idcard,
      disease: disease,
      allergy: allergy,
      phone: tel,
      address:address,
    }
    const iduser = this.props.idfacebook
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
          <Text style={styles.headertext}>แก้ไขข้อมูลสมาชิก</Text>
        </Header>
        <Content style={styles.container}>
          <View style={styles.textheader}> 
            <Icon 
              name="address-book" 
              type="FontAwesome"
              style={{fontSize:25,color:'#FFF'}}
            >
              <Text style={{fontSize:18,color:'#FFF'}}>  ข้อมูลส่วนตัว</Text>
            </Icon>
          </View>
          {
            this.state.statuscreateprofile === true ? 
                <Dialog
                  style={styles.alert}
                  title="การแจ้งเตือน"
                  visible={this.state.dialogVisible}
                  onTouchOutside={() => this.setState({dialogVisible: false})}
                >
                <View>
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
                  <View>
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
              <Label style={styles.form}>เลขประจำตัวประชาชน :</Label>
              <Field
                  required
                  secureTextEntry={true}
                  component={InputFieldIdcard}
                  validations={[required]}
                  name="idcard"
                  value={this.state.idcard}
                  onChangeText={val => this.setState({ idcard: val })}
                  customStyle={styles.input}
                  placeholder="กรอก เลขประจำตัวประชาชน"
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
            <Button block success 
                style={styles.btnconfirm}
                onPress={this.submitForm.bind(this)}
            >
              <Text style={styles.textbtnconfirm}>บันทึกข้อมูล</Text>
            </Button>
          </Form>
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
    marginTop:10,
    color:"#000",
    fontSize:18,
    width:"90%",
    marginLeft:"5%"
  },
  textbtnconfirm:{
    fontSize:18,
    fontWeight:"900",
  },
  btnconfirm:{
    alignSelf:'center',
    paddingTop:"6%",
    marginTop:"10%",
    width:"50%",
    marginBottom:40,
    borderRadius:7,
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
});
