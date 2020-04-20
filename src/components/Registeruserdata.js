import React, { Component } from 'react';
import { StyleSheet,Image, StatusBar} from 'react-native';
import { Container, Header, Form, Item, Label, Input,Icon, Content,Text,Button, View } from 'native-base';
import Icons from 'react-native-vector-icons/FontAwesome';
import MenuDrawer from 'react-native-side-drawer'

export default class Register extends Component {
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
              name="address-book" 
              type="FontAwesome"
              style={{fontSize:25,color:'#FFF'}}
            >
              <Text style={{fontSize:18,color:'#FFF'}}>  ข้อมูลส่วนตัว</Text>
            </Icon>
          </View>
          <Form  style={{width:"95%",marginLeft:"1%"}}>
            <Item floatingLabel >
              <Label style={styles.form}>ชื่อ :</Label>
              <Input />
            </Item>
            <Item floatingLabel >
              <Label style={styles.form}>นามสกุล :</Label>
              <Input />
            </Item>
            <Item floatingLabel >
              <Label style={styles.form}>เลขประจำตัวประชาชน :</Label>
              <Input />
            </Item>
            <Item floatingLabel >
              <Label style={styles.form}>เบอร์โทรศัพท์ :</Label>
              <Input />
            </Item>
            <Item floatingLabel >
              <Label style={styles.form}>โรคประจำตัว :</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label style={styles.form}>การแพ้ยา :</Label>
              <Input />
            </Item>
            <Button block success style={styles.btnconfirm}>
              <Text style={styles.textbtnconfirm}>บันทึกข้อมูล</Text>
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
    color:"#000",
    fontSize:18,
  },
  textbtnconfirm:{
    fontSize:18,
    fontWeight:"900",
  },
  btnconfirm:{
    alignSelf:'center',
    paddingTop:"6%",
    marginTop:"15%",
    width:"50%",
  }
});
