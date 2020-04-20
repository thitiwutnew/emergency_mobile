import React, { Component } from 'react';
import { StyleSheet,Image, StatusBar} from 'react-native';
import { Container, Header, Form, Item, Label, Input,Icon, Content,Text,Button, View } from 'native-base';
import Icons from 'react-native-vector-icons/FontAwesome';
import MenuDrawer from 'react-native-side-drawer'

export default class Register extends Component {

gotouserdata = () =>{
    
}
  render() {
    var  {navigate} = this.props.navigation;
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
          <Form  style={{width:"95%",marginLeft:"1%"}}>
            <Item floatingLabel>
              <Label style={styles.form}>อีเมล์ :</Label>
              <Input />
            </Item>
            <Item floatingLabel >
              <Label style={styles.form}>รหัสผ่าน :</Label>
              <Input />
            </Item>
            <Item floatingLabel >
              <Label style={styles.form}>ยืนยันรหัสผ่าน :</Label>
              <Input />
            </Item>
            <Button block success 
                style={styles.btnconfirm}
                onPress={this.gotouserdata}
            >
              <Text style={styles.textbtnconfirm}>ถัดไป</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
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
    color:"#000",
    fontSize:18,
  },
  textbtnconfirm:{
    fontSize:18,
    fontWeight:"900",
  },
  btnconfirm:{
    paddingTop:-50,
    alignSelf:'center',
    marginTop:"15%",
    width:"50%",
  }
});
