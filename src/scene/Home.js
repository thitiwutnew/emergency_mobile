import React, { Component } from "react";
import { StyleSheet, View, Platform, StatusBar } from "react-native";
import { Container,Button,Icon,Content,Text, Form } from "native-base";
import { Header as Headers } from "./Header";
import  Footer  from './Footer'
import Map from '../components/Map'
import { connect } from 'react-redux';
import {  Foundation } from "@expo/vector-icons";
import styles from '../styles/Main.style';

class Home extends Component {

  render() {
    var timedirect = null, distance=null,namedirection=null 
    if(this.props.chklogin=="0"){this.props.navigation.navigate("Login")}
    if(this.props.makedirectionvalue!=null && this.props.makedirectionvalue!=""){
      const locationsss =this.props.makedirectionvalue
      namedirection = locationsss.title
      Object.values(locationsss).map( value =>
        Object.values(value).map( values =>
          { 
            if(values[0].elements!=undefined){
              if(values[0].elements !=undefined){
                timedirect=values[0].elements[0].duration_in_traffic.text,
                distance=values[0].elements[0].distance.text
              }
            }
          } 
        )
      );
    }
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
                  การนำทางจุดบริการ AED{"\n"}
                </Text>
                <Text style={styles.textSubtitle}>
                  <Foundation name="marker" size={14} color="white" /> {namedirection}
                </Text>
              </Text>
            </View>
            <View style={styles.timeCol}>
              <Text style={styles.textLarge}>{timedirect}</Text>
              <Text style={styles.textSmall}>{distance}</Text>
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

