import React, { Component } from "react";
import { StyleSheet, View, Platform, StatusBar } from "react-native";
import { Container,Button,Icon,Content,Text, Form } from "native-base";
import { Header as Headers } from "./Header";
import  Footer  from './Footer'
import Map from '../components/Map'
import { connect } from 'react-redux';
import {  Foundation } from "@expo/vector-icons";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progressVisible: true,
    }
  }

  render() {
    if(this.props.chklogin=="0"){this.props.navigation.navigate("Login")}
    return (
      <Container>
        <StatusBar hidden = {true}/>
        <Headers style={styles.header} open={() => this.props.navigation.openDrawer()} />
        <Content style={styles.container}> 
        { this.props.makedirectionvalue!=null && this.props.makedirectionvalue!="" ? <View  
          style={[ styles.list,styles.marginless,styles.active]}
          underlayColor={"#d24146"}
          activeOpacity={0.9}
        >
          <View style={{ flex: 1, flexDirection: "row" }} >
            <View style={styles.infoCol}>
              <Text>
                <Text style={styles.textTitle}>
                  การนำทางไปยังจุดบริการ AED{"\n"}
                </Text>
                <Text style={styles.textSubtitle}>
                  <Foundation name="marker" size={14} color="white" />{" "}
                </Text>
              </Text>
            </View>
            <View style={styles.timeCol}>
              <Text style={styles.textSmall}>เวลาในการเดินทาง</Text>
              <Text style={styles.textLarge}>03:11</Text>
            </View>
          </View>
        </View> : null}
        <Map/>
        </Content>
        <Footer/>
      </Container>
    );
  }
}
const mapStateToProps = (state) =>({
  chklogin : state.checklogin.chklogin,
  makedirectionvalue: state.makedirection.makelocation,
  Locationcurrent: state.Location.Location,
})
export default connect(mapStateToProps)(Home)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#414c68",
  },
  logo: {
    marginTop: 20,
    height: 30
  },
  imageheader: {
    height: Platform.OS === "ios" ? "100%" : 40,
    width: Platform.OS === "ios" ? 150 : "100%"
  },
  footer: {
    backgroundColor: "#f03b42",
    color: "#fff",
    marginTop: Platform.OS === "ios" ? -11 : -20
  },

  aletnavigation: {
    marginVertical: 5,
    padding: 10,
    width: "100%",
    height: "auto",
    opacity: 0.95,
    borderRadius: 15,
    backgroundColor: "#c15252"
  },
  infoCol: {
    width: "70%",
    justifyContent: "center"
  },
  timeCol: {
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#4285f4"
  },
  textLarge: {
    fontWeight: "bold",
    color: "white",
    fontSize: 24
  },
  textSmall: {
    color: "white",
    fontSize: 14
  },
  textTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5
  },
  textSubtitle: {
    color: "white",
    fontSize: 14
  },
  list: {
    width: "100%",
    height: "auto",
    opacity: 0.95,
    backgroundColor: "#c15252",
  },
  marginless: {
    paddingLeft:"5%",
    width: "100%",
    height: 70,
    opacity: 1.00,
    borderRadius: 0,
    backgroundColor: "#c15252"
  },
  active: {
    backgroundColor: "#d24146"
  },
  
});
