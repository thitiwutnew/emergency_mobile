import React, { Component } from 'react';
import { StyleSheet,Image, StatusBar} from 'react-native';
import { Container, Header, Left, Body, Right, Button,Icon, Content,Thumbnail,Text,List, ListItem, View } from 'native-base';
import Icons from 'react-native-vector-icons/FontAwesome';
import MenuDrawer from 'react-native-side-drawer'
import { connect } from 'react-redux';
import { makedirecttion } from '../actions/at_makedirecttion'
import { directtion } from '../actions/at_directtion'
import MapViewDirections from 'react-native-maps-directions'
import styles from '../styles/Main.style';

class Aed extends Component {
    constructor(props) {
        super(props)
        this.state = {
          listdata: null,
        }
      }
    componentDidMount() {
        let data =[];
        const latlngs = this.props.Locationcurrent
        const latitude = latlngs[0].latlng.latitude
        const longitude = latlngs[0].latlng.longitude

        this.props.aedlocations.map((item) => {

          let timedirect = null, distance=null
          const latitudes = item.latlng.latitude
          const longitudes = item.latlng.longitude
          let latlng= {
            latitude: latitudes,
            longitude: longitudes
          }
          let origin ={
            latitude: latitude,
            longitude: longitude
          }
            fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${latitude},${longitude}&destinations=${latitudes},${longitudes}&departure_time=now&language=th&key=AIzaSyCaZfz6Roxtd39P-gDKwTy6VZ-DJUhjEiY`)
            .then(response => response.json())
            .then((responseJson)=> {

              timedirect = responseJson.rows[0].elements[0].duration_in_traffic.text,
              distance = responseJson.rows[0].elements[0].distance.text
              
              data.push(
                <ListItem thumbnail onPress={() => {this.locationdirect(responseJson,item.title,latlng,origin)}}>
                  <Left>
                      <Thumbnail square style={styles.imgicon} source={require('../resource/Images/AED.png')} />
                  </Left>
                  <Body>
                      <Text style={{ fontSize:18 }}>{item.title}</Text>
                      <Text note numberOfLines={1}>{item.description}</Text>
                  </Body>
                  <Right style={styles.timeColaed}>
                  <Text style={styles.textbig}>{timedirect}</Text>
                  <Text style={styles.textSmallaed}>{distance}</Text>
                  </Right>
                </ListItem> 
                )
                this.setState({
                  listdata: data
              })
            })
            .catch()
        })
    }

    locationdirect = (value,title,latlng,origin) => {
        let direct =(<MapViewDirections
        origin={origin}
        destination={latlng}
        strokeWidth={5}
        resetOnChange={true}
        strokeColor="#4186ff"
        apikey={'AIzaSyCaZfz6Roxtd39P-gDKwTy6VZ-DJUhjEiY'}
      />)
        this.props.handlemakelocation({"title" : title,value})
        this.props.handledirecttion(direct)
        this.props.navigation.navigate("Home")

      }

  render() {
    var  {navigate} = this.props.navigation;
    const {listdata } = this.state
    return (
      <Container>
          <StatusBar hidden = {true}/>
        <Header style={styles.header}>
          <Left style={{marginLeft:Platform.OS === 'ios' ? 20 : 0,}}>
            {
                Platform.OS === 'ios' ?  <Button transparent 
                onPress={() => navigate("Home")}
              >
                <Icon 
                  name='ios-arrow-back' 
                  type="Ionicons"
                  style={{color:'#fff'}} 
              />
              </Button> :  <Button transparent 
              onPress={() => navigate("Home")}
            >
              <Icon 
                name='md-arrow-back' 
                type="Ionicons"
                style={{color:'#fff'}} 
            />
            </Button> 
            }
          </Left>
          <Body>
            <Text style={styles.headertext}>จุดบริการเครื่อง AED ใกล้คุณ</Text>
          </Body>
        </Header>
        <Content style={styles.container}>
            <View>
            <List>
              { listdata }
            </List>
            </View>
        </Content>
      </Container>
    );
  }
}


const mapStateToProps = (state) => ({
    aedlocations: state.aedlocation.aedlocation,
    Locationcurrent: state.Location.Location,
  })
  const mapDispatchToProps = (dispatch) => ({
    handlemakelocation: (text) => {
      dispatch(makedirecttion(text))
    },
    handledirecttion: (text) => {
      dispatch(directtion(text))
    }
  })
  
export default connect(mapStateToProps, mapDispatchToProps)(Aed)
