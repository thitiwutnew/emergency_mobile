import React, { Component } from 'react'
import { StyleSheet, Dimensions, Platform, Alert } from 'react-native'
import { Text } from 'native-base'
import MapView, { Marker, PROVIDER_GOOGLE, Callout } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import { connect } from 'react-redux'
import { makedirecttion } from '../actions/at_makedirecttion'
import { setlocation } from '../actions/at_location'
class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      latitude: null,
      longitude: null,
      markers: [],
      makedirect: null,
      makedirects: null,
      error: null,
      dataSource:null,

    }
  }

  componentDidMount() {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              this.setState({
                latitude: value.latlng.latitude,
                longitude: value.latlng.longitude,
                locations: [
                  {
                    title: 'ตำแหน่งปัจจบัน',
                    latlng: {
                      latitude: position.coords.latitude,
                      longitude: position.coords.longitude,
                    },
                  },
                ]
              })
              console.log(newCoordinate)
              this.props.handleLocation(this.state.locations)
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
          );
          this.setState({
            markers: [
              {
                title: 'test1',
                latlng: {
                  latitude: 14.1601201,
                  longitude: 101.3465792,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                },
                description: 'test1',
                status: 'sssss',
              },
              {
                title: 'test2',
                latlng: {
                  latitude: 14.1586805,
                  longitude: 101.3635962,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                },
                description: 'test2',
                status: 'sssss',
              },
            ],
          })
        
    {
      const locationsss = this.props.Locationcurrent
      Object.values(locationsss).map( value =>
        this.setState({
          latitude: value.latlng.latitude,
          longitude: value.latlng.longitude,
          error: null,
          locations:(
                  <Marker
                    coordinate={value.latlng}
                    title={value.title}
                    tooltip={true}
                    ref={(ref) => {
                      value = ref
                    }}
                  />
          )
        })
      )
    }
  }

  locationdirect = (value) => {
    let latitude = value.nativeEvent.coordinate.latitude
    let longitude = value.nativeEvent.coordinate.longitude
    const origin = { latitude: this.state.latitude, longitude: this.state.longitude }
    const destination = { latitude: latitude,longitude: longitude }
    fetch("https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=40.6655101,-73.89188969999998&destinations=enc:_kjwFjtsbMt%60EgnKcqLcaOzkGari%40naPxhVg%7CJjjb%40cqLcaOzkGari%40naPxhV:&key=AIzaSyCaZfz6Roxtd39P-gDKwTy6VZ-DJUhjEiY")
    .then(response => response.json())
    .then((responseJson)=> {
      console.log(responseJson)
      this.setState({
       dataSource: responseJson
      })
    })
    .catch(error=>console.log(error))
    console.log(this.state.dataSource)
    Alert.alert(
      'Navigation',
      'My Alert Msg',
      [
        {
          text: 'Cancel',
          onPress: () => {this.setState({ makedirect: null }),this.props.handlemakelocation(null)},
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            this.setState({
              makedirect: (
                <MapViewDirections
                  origin={origin}
                  destination={destination}
                  strokeWidth={5}
                  resetOnChange={true}
                  strokeColor="#4186ff"
                  apikey={'AIzaSyCaZfz6Roxtd39P-gDKwTy6VZ-DJUhjEiY'}
                />
              ),
            })
            this.props.handlemakelocation(destination)
          },
        },
      ],
      { cancelable: false }
    )
  }

  render() {
    const { latitude, longitude,locations } = this.state
    var mapDirect = this.state.makedirect
    if(mapDirect==null){
      this.props.handlemakelocation(null)
    }
    
    return (
      locations != null ?
      <MapView
        style={styles.mapStyle}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
        showsMyLocationButton={true}
        followUserLocation={true}
        loadingEnabled={true}
        onMapReady={this.onMapReady}
        onRegionChangeComplete={this.onRegionChange}
      >
        {this.state.markers.map((marker, i) => {
          return (
            <Marker
              key={i}
              title={marker.title}
              coordinate={marker.latlng}
              description={marker.description}
              image={require('../resource/Images/AED.png')}
              ref={(ref) => {
                this.marker = ref
              }}
              onPress={this.locationdirect}
            >
              <Callout>
                <Text>{marker.title}</Text>
              </Callout>
            </Marker>
          )
        })}
        {locations}
        {mapDirect}
      </MapView> : null
    )
  }
}

const mapStateToProps = (state) => ({
  makedirectionvalue: state.makedirection.makelocation,
  Locationcurrent: state.Location.Location,
})
const mapDispatchToProps = (dispatch) => ({
  handlemakelocation: (text) => {
    dispatch(makedirecttion(text))
  },
  handleLocation: (text) => {
    dispatch(setlocation(text))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Map)

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})
