import React from 'react';
import {Dimensions} from "react-native";
import { createDrawerNavigator } from "react-navigation-drawer";
import Menu from "./scene/Menu";
import Home from "./scene/Home";
import Login from './scene/Login';

const Widthmenu = Dimensions.get('window').width;
const LeftMenu = createDrawerNavigator(
    {
        Home:{ screen: Home},
        Login: { screen: Login }
    },
    {
        initialRouteName: "Login",
        drawerWidth : Widthmenu*0.55,
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