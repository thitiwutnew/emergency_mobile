import React, { Component } from "react";
import { StyleSheet, Image, View, Dimensions , Platform, StatusBar } from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Content,
  Badge,
  Text as Texts,
  Footer,
  FooterTab
} from "native-base";
import { Header as Headers } from "../components/Header";
import Map from '../components/Map'
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    if(this.props.chklogin=="0"){this.props.navigation.navigate("Login")}
    return (
      <Container>
        <StatusBar hidden = {true}/>
        <Headers style={styles.header} open={() => this.props.navigation.openDrawer()} />
        <Content style={styles.container}> 
          <View style={styles.container}>
            <Map />
          </View>
          </Content>
        <Footer>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              backgroundColor: "#49536e"
            }}
          >
            <View
              style={{
                position: "absolute",
                alignSelf: "center",
                backgroundColor: "#fff",
                width: 110,
                height: 110,
                borderRadius: 65,
                bottom: 15,
                zIndex: 10,
                padding: "17%",
                paddingTop: 30,
                borderWidth: 3,
                borderColor: "#acacac"
              }}
            >
              <Button transparent>
                <Icon
                  name="ios-call"
                  type="Ionicons"
                  color="#f00"
                  containerStyle={{ alignSelf: "center" }}
                  style={{ fontSize: 50, color: "red" }}
                  reverse
                  onPress={() => {}}
                />
              </Button>
            </View>
            <View
              style={{
                position: "absolute",
                backgroundColor: "#f03b42",
                bottom: 0,
                zIndex: 1,
                width: "100%",
                height: 60,
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 15,
                paddingVertical: 10
              }}
            >
              <Button transparent >
                <Icon
                  name="camera"
                  color="#fff"
                  style={{ fontSize: 35, marginLeft: "13%", color: "#fff" }}
                  onPress={() => {}}
                />
              </Button>
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Button transparent>
                  <Icon
                    name="chatboxes"
                    color="#fff"
                    style={{ fontSize: 35, marginRight: "20%", color: "#fff" }}
                    onPress={() => {}}
                    containerStyle={{ marginHorizontal: 16 }}
                  />
                </Button>
              </View>
            </View>
          </View>
        </Footer>
      </Container>
    );
  }
}
const mapStateToProps = (state) =>({
  chklogin : state.checklogin.chklogin
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
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
