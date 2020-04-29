import React, { Component } from 'react'
import { StyleSheet, Dimensions, Platform, Alert } from 'react-native'
import { Text, Button, Body, Footer } from 'native-base'
import MapView, { Marker, PROVIDER_GOOGLE, Callout } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import { connect } from 'react-redux'
import { makedirecttion } from '../actions/at_makedirecttion'
import { setlocation } from '../actions/at_location'
import { Dialog } from 'react-native-simple-dialogs';
import { View } from 'react-native-animatable'
import { aedlocation } from '../actions/at_aedlocation'
import { directtion } from '../actions/at_directtion'

class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      latitude: null,
      longitude: null,
      markers: [],
      makedirect: null,
      datamakedirect: null,
      error: null,
      dataSource:null,
      dialogVisible:false,
      locations:null,
      markerlocations:null,
    }
  }

  componentDidMount() {
   
          navigator.geolocation.getCurrentPosition(
            (position) => {
              let latlng ={
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              }
              this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                locations: [
                  {
                    title: 'ตำแหน่งปัจจบัน',
                    latlng: {
                      latitude: position.coords.latitude,
                      longitude: position.coords.longitude,
                    },
                  },
                ],
                markerlocations:(
                  <Marker
                    coordinate={latlng}
                    title='ตำแหน่งปัจจบัน'
                    tooltip={true}
                    ref={(ref) => {
                      latlng = ref
                    }}
                  />
                )
              })
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
                  latitudeDelta: 0,
                  longitudeDelta: 0.05,
                },
                description: 'test1',
                status: 'sssss',
              },
              {
                title: 'test2',
                latlng: {
                  latitude: 14.1554842,
                  longitude: 101.3653599,
                  latitudeDelta: 0,
                  longitudeDelta: 0.05,
                },
                description: 'test2',
                status: 'sssss',
              },
            ],
          })
  }
   locationdirect = (value) => {
    if(value.latlng.latitude !=null || value.latlng.latitude !=''){

      const {latitude, longitude} = this.state
      let latitudes = value.latlng.latitude
      let longitudes = value.latlng.longitude
      const origin = { latitude:latitude, longitude: longitude }
      const destination = { latitude: latitudes,longitude: longitudes }
  
      fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${latitude},${longitude}&destinations=${latitudes},${longitudes}&departure_time=now&language=th&key=AIzaSyCaZfz6Roxtd39P-gDKwTy6VZ-DJUhjEiY`)
      .then(response => response.json())
      .then((responseJson)=> {
        
        this.setState({
          dataSource: {"title" : value.title,responseJson}
        })
        this.props.handlemakelocation(this.state.dataSource)
      })
      .catch()
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
    }
  }
  resetdirecttion = () => {
    this.setState({
      makedirect: null,
      dialogVisible: false
    })
    this.props.handlemakelocation(null)
    this.props.handledirecttion(null)
  }
  
  render() {
    
    const { latitude, longitude,locations,datamakedirect, makedirect, markers, markerlocations } = this.state

    var mapDirect = makedirect
    var data =datamakedirect
    data !=null ? data = data.title:null

    if(this.props.directtions != null && this.props.directtions != ''){
     
        mapDirect = this.props.directtions

    }
    if(mapDirect==null){

      this.props.handlemakelocation(null)

    }
    this.props.handleaedlocation(markers)

    return (
      markerlocations != null ?
      <View>
        <Dialog
            title="AED Service Place"
            visible={this.state.dialogVisible}
            onTouchOutside={() => this.setState({dialogVisible: false})}
        >
          <View>
              { 
                data ? <Text>{data+"\n\n"}sadasdasdas</Text>: null
              }
            <Footer style={styles.Dialogfooter}>
              { 
                  mapDirect!=null ?  <Button 
                  style={styles.btncancel}
                  onPress={() => { this.resetdirecttion()}}
              >
                <Text>Stop navigation</Text>
              </Button> :  <Button 
                  style={styles.btndirect}
                  onPress={() => {
                    this.locationdirect(datamakedirect),
                    this.setState({dialogVisible: false})
                  }}
              >
                <Text>Start navigation</Text>
              </Button>
              }
            </Footer>
          </View>
        </Dialog>
        <MapView
              style={styles.mapStyle}
              provider={PROVIDER_GOOGLE}
              initialRegion={{
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              tooltip={true}
              showsUserLocation={true}
              showsMyLocationButton={true}
              followUserLocation={true}
              loadingEnabled={true}
              onMapReady={this.onMapReady}
              onRegionChangeComplete={this.onRegionChange}
        >
        {
          markers.map((marker, i) => {
            return (
              <Marker
                key={i}
               // title={marker.title}
                coordinate={marker.latlng}
                //description={marker.description}
                image={require('../resource/Images/AED.png')}
                ref={(ref) => {
                  this.marker = ref
                }}
                onPress={() => this.setState({dialogVisible: true,datamakedirect:marker})}
              >
               
              </Marker>
            )
          })
        }
        {markerlocations}
        {
          this.props.makedirectionvalue !=null ? mapDirect : mapDirect=null 
        }
      </MapView>
      </View>: null
    )
  }
}

const mapStateToProps = (state) => ({
  makedirectionvalue: state.makedirection.makelocation,
  Locationcurrent: state.Location.Location,
  directtions: state.direction.makedirectlocation,
})
const mapDispatchToProps = (dispatch) => ({
  handlemakelocation: (text) => {
    dispatch(makedirecttion(text))
  },
  handleLocation: (text) => {
    dispatch(setlocation(text))
  },
  handleaedlocation: (text) => {
    dispatch(aedlocation(text))
  },
  handledirecttion: (text) => {
    dispatch(directtion(text))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Map)

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  btndirect:{
    padding:5,
    justifyContent: "center",
    backgroundColor:'#4285f4',
    width:"100%",
  },
  btncancel:{
    padding:5,
    justifyContent: "center",
    backgroundColor:'#ff2d2d',
    width:"100%",
  },
  Dialogfooter:{
    padding:5,
    backgroundColor:'#fff',
  }
})

