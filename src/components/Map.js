import React, { Component } from "react";
import { StyleSheet, Image, View, Dimensions , Platform } from "react-native";
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
import Icons from "react-native-vector-icons/FontAwesome";
import MenuDrawer from "react-native-side-drawer";
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
export default class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      locations: [],
      longitude: null,
      error:null,
      markers: [],
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
       (position) => {
         this.setState({
           latitude: position.coords.latitude,
           longitude: position.coords.longitude,
           error: null,
           locations: [
            {
              title: "ตำแหน่งปัจจบัน",
              latlng: {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              },
            }
          ]
         });
         this.setState({
          markers: [
            {
              title: "test",
              latlng: {
                latitude: 14.1601201,
                longitude: 101.3465792,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              },
              description: "test",
              status:"sssss",
            }
          ]
        });
       },
       (error) => this.setState({ error: error.message }),
       { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
     );
   }

  render() {
    const { latitude, longitude } = this.state;

    return (
            <MapView style={styles.mapStyle} 
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                  latitude: latitude,
                  longitude: longitude,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
                showsUserLocation={true}
                onMapReady={this.onMapReady}
                onRegionChangeComplete={this.onRegionChange}
                
              >
                 {this.state.locations.map((location, i) => {
                return (
                  <Marker
                    key={i}
                    coordinate={location.latlng}
                    title={location.title}
                    description={location.description}
                    tooltip={true}
                    image={require('../resource/Images/Location.png')}
                    ref={ref => {this.location = ref; }}
                  />
                );
              })}
              {this.state.markers.map((marker, i) => {
                return (
                  <Marker
                    key={i}
                    coordinate={marker.latlng}
                    title={marker.title}
                    description={marker.description}
                    image={require('../resource/Images/AED.png')}
                    ref={ref => {this.marker = ref; }}
                  />
                );
              })}
            </MapView>
    );
  }
}
const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
