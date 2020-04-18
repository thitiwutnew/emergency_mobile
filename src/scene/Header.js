import React, { useState } from "react";
import { StyleSheet, Image, View, Text, Platform } from "react-native";
import { Button, Icon, Badge } from "native-base";
import Icons from "react-native-vector-icons/FontAwesome";

export const Header = props => {
  const [button, setButton] = useState(true);
  const [notificationCount, setNotificationCount] = useState("1");

  const handleButton = () => {
    setButton(false);
  };

  return (
    <View style={styles.header}>
      <View>
        <Button transparent onPress={() => props.open()}>
          <Icon name="menu" style={{ color: "#fff" }} />
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
        <Button transparent active badge vertical onPress={() => handleButton()}>
          <Icons style={styles.bigBlue} name="bell" />
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
    padding: 10,
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  bigBlue: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: Platform.OS === "ios" ? 35 : 30
  },
  alart: {
    position: "absolute",
    width: Platform.OS === "ios" ? "110%" : 20,
    borderRadius: 10,
    textAlign: "center",
    height: 15,
    paddingRight: 1,
    paddingLeft: -20,
    top: 2,
    right: 2
  },
  textAlert: {
    textAlign: "center",
    fontSize: 10,
    alignContent: "center"
  }
});
