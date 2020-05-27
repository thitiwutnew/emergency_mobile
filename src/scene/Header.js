import React, { useState } from "react";
import { StyleSheet, Image, View, Text, Platform } from "react-native";
import { Button, Icon, Badge } from "native-base";
import Icons from "react-native-vector-icons/FontAwesome";
import styles from '../styles/Main.style';

export const Header = props => {
  const [button, setButton] = useState(true);
  const [notificationCount, setNotificationCount] = useState("99");

  const handleButton = () => {
    setButton(false);
  };

  return (
    <View style={styles.headers}>
      <View>
        <Button transparent onPress={() => props.open()}>
          <Icon name="menu" style={{ color: "#fff", fontSize:Platform.OS === 'ios' ? 40 : 30 }} />
        </Button>
      </View>
      <View style={{ alignContent: "center" }}>
        <Image
          style={styles.logohead}
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
            <Badge style={styles.alarthead}>
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

