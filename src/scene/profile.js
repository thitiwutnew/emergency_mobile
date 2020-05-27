import React, { Component } from 'react';
import { StyleSheet, StatusBar} from 'react-native';
import { Container, Header,Input,Icon, Content,Text,Button, View, Thumbnail, Item, Left, Body,Right } from 'native-base';
import { Form } from 'react-native-validate-form'
import { setUserdata } from '../actions/at_fbregister'
import { connect } from 'react-redux';
import { checkloginfacebook } from '../actions/at_checklogin'
import { AsyncStorage } from 'react-native'
import styles from '../styles/Main.style';

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
          <Left style={{marginLeft:Platform.OS === 'ios' ? 20 : 0,}}>
            {
                Platform.OS === 'ios' ?  <Button transparent 
                onPress={() => navigate("Home")}
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
            <Text style={styles.headertext}>ข้อมูลสมาชิก</Text>
          </Body>
        </Header>
        <Content style={styles.container}>
          <Thumbnail square large style={styles.imagepf} source={require('../resource/Images/avatar.png')} />
          <View style={styles.textheaderprofile}> 
            <Text style={{fontSize:18,color:'#FFF',padding:10}}>
              <Icon 
              name="address-book" 
              type="FontAwesome"
              style={{fontSize:20,color:'#FFF'}}
              >
              </Icon>  ข้อมูลส่วนตัว</Text>
          </View>
          <Form  
            style={styles.formprofile}
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
              <Item disabled
                style={{marginBottom:-7}}
              >
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