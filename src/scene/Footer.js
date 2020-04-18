import React,{ Component } from "react";
import { StyleSheet, View, } from "react-native";
import { Container,Button,Icon,Content,Text, Form } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";
// import testSvg from './test.svg';
class Footer extends Component {
  Call() {
    // firebase
    //   .firestore()
    //   .collection("Activity")
    //   .add({
    //     action: "CALL",
    //     name: "TEST",
    //     phonenumber: "0903877522",
    //     status: 0,
    //     timestamp: Date.now(),
    //     latitude: "14",
    //     longitude: "100"
    //   });
    // this.watchId = navigator.geolocation.watchPosition(
    //   position => {
    //     firebase
    //       .firestore()
    //       .collection("Activity")
    //       .add({
    //         action: "CALL",
    //         name: "TEST",
    //         phonenumber: "0903877522",
    //         status: 0,
    //         timestamp: Date.now(),
    //         latitude: position.coords.latitude,
    //         longitude: position.coords.longitude
    //       });
    //   },
    //   error => this.setState({ error: error.message }),
    //   {
    //     enableHighAccuracy: true,
    //     timeout: 20000,
    //     maximumAge: 1000,
    //     distanceFilter: 10
    //   }
    // );

    // call({
    //   number: "1669",
    //   prompt: true
    // }).catch(console.error);
//   }

//   QRScanner = () => {
//     const { navigate } = this.props.navigation;
//     navigate("AED");
//   };

  // videoCall = () => {
  //   console.log("TEST");
  //   const { navigate } = this.props.navigation;
  //   navigate("VideoCall");
};

  render() {
    return (
        <View 
            style={{
                height:75,
                backgroundColor: "#f03b42",
            }}>
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
                borderColor: "#acacac",
                
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
          }}
        >
          <Button transparent >
            <Icon
              name="camera"
              color="#fff"
              style={{ fontSize: 35, marginLeft: "13%", color: "#fff",paddingHorizontal:20 }}
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
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onClickAED: user => {
      dispatch({
        type: "GET-ROUTE-AED",
        payload: "route"
      });
    }
  };
};
const mapStateToProps = state => {
  return {
    user: state.user
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Footer);