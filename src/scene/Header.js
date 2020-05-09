import React, { useState } from "react";
import { StyleSheet, Image, View, Text, Platform } from "react-native";
import { Button, Icon, Badge } from "native-base";
import Icons from "react-native-vector-icons/FontAwesome";

export const Header = props => {
  const [button, setButton] = useState(true);
  const [notificationCount, setNotificationCount] = useState("99");

  const handleButton = () => {
    setButton(false);
  };

  return (
    <View style={styles.header}>
      <View>
        <Button transparent onPress={() => props.open()}>
          <Icon name="menu" style={{ color: "#fff", fontSize:Platform.OS === 'ios' ? 40 : 30 }} />
        </Button>
      </View>
      <View style={{ alignContent: "center" }}>
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require("../resource/Images/Icon-header.png")}
        />
      </View>
      <View>
        <Button transparent active badge  onPress={() => handleButton()}>
          {
            Platform.OS === 'ios' ?  <Icons style={styles.bigBlue} name="bell" /> :  <Icons style={styles.bigBlue} name="bell" />
          }
          {button == true ? (
            <Badge style={styles.alart}>
              <Text style={styles.textAlert}>{notificationCount}</Text>
            </Badge>
          ) : (
            null
          )}
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    marginTop: 7,
    height: 30,
    alignItems: "stretch"
  },
  containerLogo: {
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    backgroundColor: "#405273",
    padding: Platform.OS === 'ios' ? 15 : 10,
    paddingTop: Platform.OS === 'ios' ? "12%" : "5%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  bigBlue: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: Platform.OS === "ios" ? 33 : 30
  },
  alart: {
    position: "absolute",
    width: 25,
    borderRadius: 10,
    textAlign: "center",
    height: 20,
    paddingRight: 1,
    paddingLeft: Platform.OS === "ios" ? 1 :2,
    paddingTop: Platform.OS === "ios" ? 1 :2,
    top: 2,
    right: 2
  },
  textAlert: {
    textAlign: "center",
    fontSize: 10,
    alignContent: "center"
  }
});
