import React from 'react';
import {Dimensions} from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";
import Menu from "./scene/Menu";
import Home from "./scene/Home";

const Widthmenu = Dimensions.get('window').width;
const LeftMenu = createDrawerNavigator(
    {
        Home:{ screen: Home}
    },
    {
        initialRouteName: "Home",
        drawerWidth : Widthmenu*0.60,
        drawerPosition: 'left',
        contentOptions: {
            activeTintColor: "#000"
        },
        contentComponent: props =><Menu {...props} />,
        drawerOpenRoute: 'LeftSideMenu',
        drawerCloseRoute: 'LeftSideMenuClose',
        drawerToggleRoute: 'LeftSideMenuToggle',
    }
);
export default LeftMenu;